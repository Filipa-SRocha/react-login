import { Container, PersonContainer, ButtonContainer } from './People.styled';
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
						<PersonContainer key={person.idPessoa}>
							<Person person={person} />

							<p>lal</p>
							<ButtonContainer>
								<button
									onClick={() => {
										handleEdit(person.idPessoa);
									}}
								>
									Editar
								</button>
								<button
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
								>
									Excluir
								</button>
							</ButtonContainer>
							<button
								onClick={() => {
									navigate(`/new-address/${person.idPessoa}`);
								}}
							>
								{' '}
								Endereço
							</button>
						</PersonContainer>
						<AddressContainer idPessoa={person.idPessoa} />
					</>
				))}
			</ul>
		</Container>
	);
};
export default ListPeople;
