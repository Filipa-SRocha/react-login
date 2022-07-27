import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Permission = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	}, []);

	return <></>;
};
export default Permission;
