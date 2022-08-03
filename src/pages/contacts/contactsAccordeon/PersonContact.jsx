import { CrudSmallActionButton } from '../../../components/button/Buttons';
import { confirmAlert } from 'react-confirm-alert';
import { useContext } from 'react';
import { ContactContext } from '../../../Context/ContactContext';
import { useNavigate } from 'react-router-dom';

const PersonContact = ({ contato, setup }) => {
	const navigate = useNavigate();
	const { deleteContact, setIsEditMode } = useContext(ContactContext);

	const handleDelete = async () => {
		await deleteContact(contato.idContato);
		setup();
	};

	const handleEdit = () => {
		setIsEditMode(true);

		navigate(`/update-contact/${contato.idPessoa}/${contato.idContato}`);
	};

	return (
		<>
			<div>
				<p>{contato.telefone}</p>
				<p>{contato.descricao}</p>
			</div>
			<div>
				<CrudSmallActionButton
					text='Editar'
					icon='edit'
					borderColor='grey'
					onClick={handleEdit}
				></CrudSmallActionButton>
				<CrudSmallActionButton
					text='Excluir'
					icon='delete'
					backgroundColor='#BD322B'
					color='white'
					onClick={() => {
						confirmAlert({
							title: 'Eliminar',
							message: `Quer mesmo eliminar este contato?`,
							buttons: [
								{
									label: 'Sim',
									onClick: () => handleDelete(),
								},
								{
									label: 'Não',
									onClick: () => {
										return;
									},
								},
							],
						});
					}}
				/>
			</div>
		</>
	);
};
export default PersonContact;
