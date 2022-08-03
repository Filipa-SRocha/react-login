import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactsForm from './ContactsForm';

const UpdateContactPage = () => {
	const { idPessoa, idContato } = useParams();

	useEffect(() => {
		console.log('InsideUseEffect', idContato, idPessoa);
	}, []);

	return (
		<div>
			<ContactsForm idContato={idContato} idPessoa={idPessoa} />
		</div>
	);
};
export { UpdateContactPage };
