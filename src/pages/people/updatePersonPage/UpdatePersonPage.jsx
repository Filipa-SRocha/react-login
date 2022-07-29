import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '../../../Context/PeopleContext';
import PeopleForm from '../components/peopleForm';

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
		<div>
			{person.nome ? person.nome : <h1>Sem sorte</h1>}

			<PeopleForm isEditMode={true} id={id} personDetails={person} />
		</div>
	);
};
export default UpdatePersonPage;
