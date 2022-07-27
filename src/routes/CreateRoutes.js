import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthContextProvider } from '../Context/AuthContext';
import Users from '../pages/users/Users';
import Menu from '../components/header/Menu';
import Footer from '../components/footer/Footer';

const CreateRoutes = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Menu />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/users' element={<Users />} />
				</Routes>
				<Footer />
			</AuthContextProvider>
		</BrowserRouter>
	);
};

export default CreateRoutes;
