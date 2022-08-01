import { useContext, useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { AddressContext } from '../../../../Context/AddressContext';
import { AddressContent, AddressTitle } from './AddressContainer.styled';

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
		<>
			<AddressTitle onClick={toggleAccordeon}>
				<AiOutlineHome /> <h3>Endereço</h3>{' '}
				{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
			</AddressTitle>

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
						<p style={{ margin: '10px 0 20px 0' }}>
							Não existe nenhuma morada cadastrada
						</p>
					</>
				)}
			</AddressContent>
		</>
	);
};
export default AddressContainer;
