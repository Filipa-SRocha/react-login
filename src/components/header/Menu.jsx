import Item from './Item';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Menu = () => {
	const { handleLogout } = useContext(AuthContext);

	return (
		<nav>
			<ul>
				<Item name='Login' url='/' />
				<Item name='Cadastrar Usuário' url='/users' />
				<button onClick={handleLogout}>Logout</button>
			</ul>
		</nav>
	);
};
export default Menu;
