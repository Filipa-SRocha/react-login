import { Container, PersonContainer, ButtonContainer } from './People.styled';
import Person from './Person';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useContext } from 'react';
import { PeopleContext } from '../../Context/PeopleContext';
import { AddressContext } from '../../Context/AddressContext';

const ListPeople = ({ people }) => {
	const { handleDelete, handleEdit } = useContext(PeopleContext);
	const { createAddress } = useContext(AddressContext);

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
						<button
							onClick={() => {
								createAddress(person.idPessoa);
							}}
						>
							{' '}
							Endereço
						</button>
					</PersonContainer>
				))}
			</ul>
		</Container>
	);
};
export default ListPeople;
