import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const navigate = useNavigate();
	async function handleLogin(user) {
		try {
			const { data } = await api.post('/auth', user);
			localStorage.setItem('token', data);
			navigate('/users');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<AuthContext.Provider value={{ handleLogin }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthContextProvider };
