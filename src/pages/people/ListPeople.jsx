import {
	Container,
	ButtonContainer,
	ListItemContainer,
	PersonContainer,
	AddressesContainer,
} from './People.styled';

import { CrudActionButton } from '../../components/button/Buttons';
import Person from './Person';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useContext } from 'react';
import { PeopleContext } from '../../Context/PeopleContext';
import { useNavigate } from 'react-router-dom';

import AddressContainer from './components/addressAccordeon/AddressContainer';

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
										onClick={() => {
											handleEdit(person.idPessoa);
										}}
									></CrudActionButton>
									<CrudActionButton
										text='Excluir'
										borderColor='red'
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
							<AddressesContainer>
								<AddressContainer idPessoa={person.idPessoa} />
								<CrudActionButton
									text='Novo Endereço'
									onClick={() => {
										navigate(`/new-address/${person.idPessoa}`);
									}}
								/>
							</AddressesContainer>
						</ListItemContainer>
					</>
				))}
			</ul>
		</Container>
	);
};
export default ListPeople;
