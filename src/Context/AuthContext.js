import { createContext } from 'react';
import api from '../api';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const handleLogin = async (user) => {
		const token = await api.post('/auth', user);
		console.log(token);
		//set item no lacal storage
	};

	return (
		<AuthContext.Provider value={{ handleLogin }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthContextProvider };
