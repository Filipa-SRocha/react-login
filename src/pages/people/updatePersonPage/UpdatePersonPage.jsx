import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '../../../Context/PeopleContext';
import PeopleForm from '../components/peopleForm';
import {
	FormBackground,
	FormContainer,
} from '../registerPerson/RegisterPerson.styled';

const UpdatePersonPage = () => {
	const [person, setPerson] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	const { getPerson } = useContext(PeopleContext);

	const setup = async () => {
		const personDetails = await getPerson(id);
		setPerson(personDetails);
		setIsLoading(false);
	};

	useEffect(() => {
		setup();
	}, []);

	const Loading = () => {
		return [<h1>Loading---</h1>];
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<FormBackground>
			<FormContainer>
				{person.nome ? person.nome : <h1>Loading</h1>}

				<PeopleForm isEditMode={true} id={id} personDetails={person} />
			</FormContainer>
		</FormBackground>
	);
};
export default UpdatePersonPage;
