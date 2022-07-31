import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AddressContext } from '../../Context/AddressContext';
import Address from './Address';

const UpdateAddressPage = () => {
	const { idEndereco } = useParams();
	const { getAddressByAddressId } = useContext(AddressContext);

	const [addressToEdit, setAddressToEdit] = useState({});

	const setup = async () => {
		const endereco = await getAddressByAddressId(idEndereco);
		setAddressToEdit(endereco.data);
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<div>
			<Address addressToEdit={addressToEdit} idEndereco={idEndereco} />
		</div>
	);
};
export { UpdateAddressPage };
