import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Users from '../pages/users/Users';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import People from '../pages/people/People';
import Address from '../pages/address/Address';
import NotFound from '../pages/notFound/notFound';
import { PeopleContextProvider } from '../Context/PeopleContext';
import RegisterPerson from '../pages/people/registerPerson/RegisterPerson';
import { GlobalStyle } from '../globalStyles.styled';
import UpdatePersonPage from '../pages/people/updatePersonPage/UpdatePersonPage';

const Router = () => {
	const { isLogged } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<PeopleContextProvider>
				<Routes>
					{isLogged ? (
						<>
							<Route path='/people' element={<People />} />
							<Route path='/address' element={<Address />} />
							<Route
								path='/people/register-person'
								element={<RegisterPerson />}
							/>
							<Route
								path='/people/update-person/:id'
								element={<UpdatePersonPage />}
							/>
						</>
					) : (
						<>
							<Route path='/' element={<Login />} />
							<Route path='/users' element={<Users />} />
						</>
					)}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</PeopleContextProvider>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
