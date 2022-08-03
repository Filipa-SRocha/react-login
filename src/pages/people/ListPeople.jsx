import {
	CrudActionButton,
	SecondaryButton,
} from '../../components/button/Buttons';
import Person from './Person';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useContext } from 'react';
import { PeopleContext } from '../../Context/PeopleContext';
import { useNavigate } from 'react-router-dom';
import AddressContainer from './components/addressAccordeon/AddressContainer';

import {
	Container,
	ButtonContainer,
	ListItemContainer,
	PersonContainer,
	AccordeonsContainer,
	Legenda,
} from './People.styled';
import ContactsAccordeon from '../contacts/contactsAccordeon/ContactsAccordeon';

const ListPeople = ({ people }) => {
	const { handleDelete, handleEdit } = useContext(PeopleContext);

	const navigate = useNavigate();

	return (
		<Container>
			<ul>
				{people.map((person) => (
					<>
						<ListItemContainer key={person.idPessoa}>
							<PersonContainer>
								<Person person={person} />
								<ButtonContainer>
									<CrudActionButton
										text='Editar'
										icon='edit'
										borderColor='grey'
										onClick={() => {
											handleEdit(person.idPessoa);
										}}
									></CrudActionButton>
									<CrudActionButton
										text='Excluir'
										icon='delete'
										backgroundColor='#BD322B'
										color='white'
										id={person.idPessoa}
										onClick={() => {
											confirmAlert({
												title: 'Eliminar',
												message: `Quer mesmo eliminar ${person.nome}?`,
												buttons: [
													{
														label: 'Sim',
														onClick: () => handleDelete(person.idPessoa),
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
									></CrudActionButton>
								</ButtonContainer>
							</PersonContainer>
							<AccordeonsContainer>
								<AddressContainer idPessoa={person.idPessoa} />
							</AccordeonsContainer>

							<AccordeonsContainer>
								<ContactsAccordeon idPessoa={person.idPessoa} />
							</AccordeonsContainer>
						</ListItemContainer>
					</>
				))}
			</ul>
		</Container>
	);
};
export default ListPeople;
