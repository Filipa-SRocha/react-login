import { useContext } from 'react';
import { AddressContext } from '../../../../Context/AddressContext';

import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdHomeRepairService } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { CrudSmallActionButton } from '../../../../components/button/Buttons';

// import {
// 	PersonAddressContainer,
// 	AddressItemContainer,
// 	AddressButtonsContainer,
// } from './AddressContainer.styled';

import {
	AccordeonItemContainer,
	AccordeonDetailsContainer,
	AccordeonButtonsContainer,
} from '../../../../components/Accordeon/Accordeon.styled';

const PersonAddress = ({ address, setup, idPessoa }) => {
	const navigate = useNavigate();

	const { deleteAddress, setIsEditMode } = useContext(AddressContext);

	const handleDelete = async () => {
		//confirmação se quer apagar
		await deleteAddress(address.idEndereco);
		setup();
	};

	const handleEdit = () => {
		setIsEditMode(true);
		navigate(`/update-address/${address.idEndereco}`);
	};

	return (
		<AccordeonItemContainer>
			<AccordeonDetailsContainer>
				<div>
					{address.tipo === 'COMERCIAL' ? (
						<MdHomeRepairService />
					) : (
						<AiOutlineHome />
					)}
					<p>
						{address.logradouro}, {address.numero}, {address.complemento}
					</p>
				</div>
				<small>
					{address.cep} {address.cidade}, {address.estado}, {address.pais}
				</small>
			</AccordeonDetailsContainer>

			<AccordeonButtonsContainer>
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
							message: `Quer mesmo eliminar este endereço?`,
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
			</AccordeonButtonsContainer>
		</AccordeonItemContainer>
	);
};
export { PersonAddress };
