import { useContext, useEffect, useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import {
	AccordeonContentContainer,
	AccordeonTab,
} from '../../../components/Accordeon/Accordeon.styled';
import { ContactContext } from '../../../Context/ContactContext';
import PersonContact from './PersonContact';

const ContactsAccordeon = ({ idPessoa }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [contactsArray, setContactsArray] = useState([]);
	const { getContacts } = useContext(ContactContext);

	const toggleAccordeon = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const setup = async () => {
		setContactsArray(await getContacts(idPessoa));
		console.log('set up');
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<>
			<AccordeonTab onClick={toggleAccordeon}>
				<AiOutlinePhone /> <h3>Contactos</h3>
				{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
			</AccordeonTab>

			<AccordeonContentContainer className={isOpen ? 'show' : ''}>
				{contactsArray && contactsArray.length > 0 ? (
					<ul>
						{contactsArray.map((contato) => {
							return (
								<PersonContact
									key={`idContato${contato.idContato}`}
									contato={contato}
									setup={setup}
									idPessoa={idPessoa}
								/>
							);
						})}
					</ul>
				) : (
					<>
						<p style={{ margin: '10px 0 20px 0' }}>
							Não existe nenhum contato cadastrado...
						</p>
					</>
				)}
			</AccordeonContentContainer>
		</>
	);
};
export default ContactsAccordeon;
