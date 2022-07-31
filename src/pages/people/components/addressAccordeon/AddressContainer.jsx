import { useContext, useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';

import { AddressContext } from '../../../../Context/AddressContext';
import { AddressContent } from './AddressContainer.styled';

import { PersonAddress } from './PersonAddress';

const AddressContainer = ({ idPessoa }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [addressArray, setAddressArray] = useState([]);
	const { getAddress } = useContext(AddressContext);

	const toggleAccordeon = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const setup = async () => {
		setAddressArray(await getAddress(idPessoa));
		console.log('set up');
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<div>
			<div onClick={toggleAccordeon}>
				<AiOutlineHome /> <h3>Endereço</h3> <AiOutlineDown />
			</div>
			<AddressContent className={isOpen ? 'show' : ''}>
				{addressArray.length > 0 ? (
					<ul>
						{addressArray.map((address) => {
							return (
								<PersonAddress
									key={`idEndereco${address.idEndereco}`}
									address={address}
									setup={setup}
									idPessoa={idPessoa}
								/>
							);
						})}
					</ul>
				) : (
					<>
						<p>Não existe nenhuma morada cadastrada</p>
					</>
				)}
			</AddressContent>
		</div>
	);
};
export default AddressContainer;
