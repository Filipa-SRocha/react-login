import Item from './Item';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { NavList } from './Header.styled';

const Menu = () => {
	const { handleLogout, isLogged } = useContext(AuthContext);
	console.log('');
	const LoggedOutMenu = () => {
		return (
			<>
				<Item name='Login' url='/' />
				<Item name='Cadastrar Usuário' url='/users' />
			</>
		);
	};

	const LoggedInMenu = () => {
		return (
			<>
				<Item name='Endereço' url='/address' />
				<Item name='Pessoas' url='/people' />
				<button onClick={handleLogout}>Logout</button>
			</>
		);
	};

	return (
		<nav>
			<NavList>{isLogged ? <LoggedInMenu /> : <LoggedOutMenu />}</NavList>
		</nav>
	);
};
export default Menu;
