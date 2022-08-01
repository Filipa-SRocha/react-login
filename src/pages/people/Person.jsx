import { PersonInfoContainer } from './People.styled';
import moment from 'moment';

const Person = ({ person }) => {
	const data = new Date(person.dataNascimento);

	return (
		<PersonInfoContainer>
			<p>{person.nome}</p>
			<p>{moment(data).locale('pt').format('LL')}</p>
			<p>{person.cpf}</p>
			<p>{person.email}</p>
		</PersonInfoContainer>
	);
};
export default Person;
