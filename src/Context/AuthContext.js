import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiDBC } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState(false);

	async function handleLogin(user) {
		try {
			const { data } = await apiDBC.post('/auth', user);
			localStorage.setItem('token', data);
			setIsLogged(true);
			navigate('/users');
		} catch (error) {
			toast.error('Senha ou login inválido');
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('token');
		setIsLogged(false);
	};

	const handleSignUp = async (user) => {
		try {
			await apiDBC.post('/auth/create', user);
			toast.success('Usuário cadastrado com sucesso!');
			navigate('/');
		} catch (error) {
			toast.error('Erro no cadastro!');
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp }}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthContextProvider };
