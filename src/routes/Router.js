import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import People from '../pages/people/People';
import NotFound from '../pages/notFound/notFound';
import { PeopleContextProvider } from '../Context/PeopleContext';
import RegisterPerson from '../pages/people/registerPerson/RegisterPerson';
import { GlobalStyle } from '../globalStyles.styled';
import UpdatePersonPage from '../pages/people/updatePersonPage/UpdatePersonPage';
import NewAccount from '../pages/login/NewAccount';
import RegisterAddressPage from '../pages/address/RegisterAddressPage';
import { AddressContextProvider } from '../Context/AddressContext';
import { UpdateAddressPage } from '../pages/address/UpdateAddressPage';

const Router = () => {
	const { isLogged } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<PeopleContextProvider>
				<AddressContextProvider>
					<Routes>
						{isLogged ? (
							<>
								<Route path='/people' element={<People />} />
								<Route
									path='/new-address/:idPessoa'
									element={<RegisterAddressPage />}
								/>
								<Route
									path='/update-address/:idEndereco'
									element={<UpdateAddressPage />}
								/>

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
								<Route path='/new-account' element={<NewAccount />} />
							</>
						)}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</AddressContextProvider>
			</PeopleContextProvider>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
