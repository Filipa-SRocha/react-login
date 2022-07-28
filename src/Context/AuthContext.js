import { useState, useEffect } from 'react';
import { createContext } from 'react';

import { apiDBC } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [isLogged, setIsLogged] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			setIsLogged(true);
			apiDBC.defaults.headers.common['Authorization'] = token;
		}
		setIsLoading(false);
	}, []);

	async function handleLogin(user) {
		try {
			const { data } = await apiDBC.post('/auth', user);
			localStorage.setItem('token', data);
			apiDBC.defaults.headers.common['Authorization'] = data;
			setIsLogged(true);
			window.location.href = '/people';
		} catch (error) {
			toast.error('Senha ou login inválido');
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('token');
		apiDBC.defaults.headers.common['Authorization'] = undefined;
		setIsLogged(false);
		window.location.href = '/';
	};

	const handleSignUp = async (user) => {
		try {
			await apiDBC.post('/auth/create', user);
			toast.success('Usuário cadastrado com sucesso!');
			window.location.href = '/';
		} catch (error) {
			toast.error('Erro no cadastro!');
			console.log(error);
		}
	};

	const Loading = () => {
		return [<h1>Loading---</h1>];
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider
			value={{ handleLogin, handleLogout, handleSignUp, isLogged }}
		>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthContextProvider };
