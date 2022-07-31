import Item from './Item';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { NavList } from './Header.styled';
import { SecondaryButton } from '../button/Buttons';

const Menu = () => {
	const { handleLogout, isLogged } = useContext(AuthContext);
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
			<NavList>
				<div>
					<Item name='Overview' url='#' />
					<Item name='Pessoas' url='/people' />
					<Item name='Endereços' url='/address' />
					<Item name='Contatos' url='#' />
				</div>

				<div>
					<Item name='Settings' url='#' />
					<Item name='Subscriptions' url='#' />
				</div>

				<SecondaryButton text='Logout' onClick={handleLogout} />
			</NavList>
		);
	};

	return (
		<nav>
			<NavList>{isLogged ? <LoggedInMenu /> : <LoggedOutMenu />}</NavList>
		</nav>
	);
};
export default Menu;
