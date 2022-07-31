import { useContext } from 'react';
import { AddressContext } from '../../../../Context/AddressContext';

import { useNavigate } from 'react-router-dom';

import { MdHomeRepairService } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

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
		<li>
			<div>
				{address.tipo === 'COMERCIAL' ? (
					<MdHomeRepairService />
				) : (
					<AiOutlineHome />
				)}
				<p>
					{address.logradouro}, {address.numero}, {address.complemento}
				</p>
				<small>
					{address.cep} {address.cidade}, {address.estado}, {address.pais}
				</small>
			</div>

			<div>
				<button onClick={handleDelete}>
					<AiOutlineClose />
					Apagar
				</button>
				<button onClick={handleEdit}>
					<BiEditAlt /> Editar
				</button>
			</div>
		</li>
	);
};
export { PersonAddress };
