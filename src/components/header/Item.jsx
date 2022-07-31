import { Link } from 'react-router-dom';
import { MenuItem } from './Header.styled';

const Item = ({ name, url }) => {
	return (
		<MenuItem>
			{url === '#' ? <p>{name}</p> : <Link to={url}> {name} </Link>}
		</MenuItem>
	);
};
export default Item;
