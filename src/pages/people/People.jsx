import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ListPeople from './ListPeople';
import { PeopleContext } from '../../Context/PeopleContext';

const People = () => {
	const { people, getPeople } = useContext(PeopleContext);

	useEffect(() => {
		getPeople();
	}, []);

	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('/people/register-person');
	};

	return (
		<section>
			<button onClick={handleRegister}>Cadastrar</button>

			{/* Lista de Pessoas */}
			<ListPeople people={people} />

			<ToastContainer />
		</section>
	);
};
export default People;
