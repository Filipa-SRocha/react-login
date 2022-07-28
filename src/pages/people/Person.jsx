import { PersonInfoContainer } from './People.styled';

const Person = ({ person }) => {
	return (
		<PersonInfoContainer>
			<p>{person.nome}</p>
			<p>{person.dataNascimento}</p>
			<p>{person.cpf}</p>
			<p>{person.email}</p>
		</PersonInfoContainer>
	);
};
export default Person;
