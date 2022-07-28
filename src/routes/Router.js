import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Users from '../pages/users/Users';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import People from '../pages/people/People';
import Address from '../pages/address/Address';
import NotFound from '../pages/notFound/notFound';

const Router = () => {
	const { isLogged } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{isLogged ? (
					<>
						<Route path='/people' element={<People />} />
						<Route path='/address' element={<Address />} />
					</>
				) : (
					<>
						<Route path='/' element={<Login />} />
						<Route path='/users' element={<Users />} />
					</>
				)}
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
