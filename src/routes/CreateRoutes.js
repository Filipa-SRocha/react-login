import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthContextProvider } from '../Context/AuthContext';

import Users from '../pages/users/Users';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import People from '../pages/people/People';
import Address from '../pages/address/Address';

const CreateRoutes = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Header />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/users' element={<Users />} />
					<Route path='/people' element={<People />} />
					<Route path='/address' element={<Address />} />
				</Routes>
				<Footer />
			</AuthContextProvider>
		</BrowserRouter>
	);
};

export default CreateRoutes;
