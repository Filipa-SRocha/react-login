import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ListPeople from './ListPeople';
import { PeopleContext } from '../../Context/PeopleContext';
import { PageContainer } from './People.styled';
import { AddButton } from '../../components/button/Buttons';

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
		<PageContainer>
			<div className='peopleTitle'>
				<h1>Pessoas</h1>
			</div>
			<div className='addButtonContainer'>
				<AddButton text='+ Nova Pessoa' onClick={handleRegister} />
			</div>
			{/* Lista de Pessoas */}
			<ListPeople people={people} />

			<ToastContainer />
		</PageContainer>
	);
};
export default People;
