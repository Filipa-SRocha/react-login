import { useContext, useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { AddressContext } from '../../../../Context/AddressContext';
import {
	AccordeonContentContainer,
	AccordeonTabS,
} from '../../../../components/Accordeon/Accordeon.styled';

import { PersonAddress } from './PersonAddress';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../../../../components/button/Buttons';
import { AccordeonTab } from '../../../../components/Accordeon/Accordeon';

const AddressContainer = ({ idPessoa }) => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [addressArray, setAddressArray] = useState([]);
	const { getAddress } = useContext(AddressContext);

	const setup = async () => {
		setAddressArray(await getAddress(idPessoa));
		console.log('set up');
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<>
			<AccordeonTab title='Endereços' isOpen={isOpen} setIsOpen={setIsOpen} />

			<AccordeonContentContainer className={isOpen ? 'show' : ''}>
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
				<SecondaryButton
					text='Novo Endereço'
					width='160px'
					onClick={() => {
						navigate(`/new-address/${idPessoa}`);
					}}
				/>
			</AccordeonContentContainer>
		</>
	);
};
export default AddressContainer;
