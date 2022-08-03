import ContactsForm from './ContactsForm';
import { useParams } from 'react-router-dom';

const NewContactPage = () => {
	const { idPessoa } = useParams();

	return (
		<>
			{idPessoa ? (
				<div>
					<h1>Registre uma nova Pessoa</h1>

					<ContactsForm idPessoa={idPessoa} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export { NewContactPage };
