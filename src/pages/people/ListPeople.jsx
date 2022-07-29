import { Container, PersonContainer, ButtonContainer } from './People.styled';
import Person from './Person';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useContext } from 'react';
import { PeopleContext } from '../../Context/PeopleContext';

const ListPeople = ({ people }) => {
	const { handleDelete, handleEdit } = useContext(PeopleContext);

	return (
		<Container>
			<ul>
				{people.map((person) => (
					<PersonContainer key={person.idPessoa}>
						<Person person={person} />
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
					</PersonContainer>
				))}
			</ul>
		</Container>
	);
};
export default ListPeople;
