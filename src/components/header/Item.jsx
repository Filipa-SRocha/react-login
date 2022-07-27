import { Link } from 'react-router-dom';

const Item = ({ name, url }) => {
	return (
		<li>
			<Link to={url}> {name} </Link>
		</li>
	);
};
export default Item;
