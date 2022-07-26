import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import { AuthContextProvider } from '../Context/AuthContext';
import Users from '../pages/Users/Users';

const CreateRoutes = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/login' element={<Login />} />
					<Route path='/users' element={<Users />} />
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
};

export default CreateRoutes;
