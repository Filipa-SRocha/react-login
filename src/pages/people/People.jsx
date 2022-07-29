import { useContext, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { apiDBC } from '../../api';
import ListPeople from './ListPeople';
import { PeopleContext } from '../../Context/PeopleContext';

const People = () => {
	const { people, getPeople } = useContext(PeopleContext);

	// const [people, setPeople] = useState([]);

	useEffect(() => {
		getPeople();
	}, []);

	// const getPeople = async () => {
	// 	try {
	// 		const { data } = await apiDBC.get('/pessoa');
	// 		setPeople(data.content);
	// 		return;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('/people/register-person');
	};

	return (
		<div>
			<button onClick={handleRegister}>Cadastrar</button>

			{/* Lista de Pessoas */}
			<ListPeople people={people} />

			<ToastContainer />
		</div>
	);
};
export default People;
