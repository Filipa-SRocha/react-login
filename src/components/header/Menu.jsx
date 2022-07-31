import Item from './Item';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { NavList } from './Header.styled';

const Menu = () => {
	const { handleLogout } = useContext(AuthContext);

	return (
		<nav>
			<NavList>
				<p>Overview</p>
				<Item name='Pessoas' url='/people' />
				<Item name='Endereços' url='/address' />
				<p>Contatos</p>

				<button onClick={handleLogout}>Logout</button>
			</NavList>
		</nav>
	);
};
export default Menu;
