import { PersonInfoContainer, Legenda } from './People.styled';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const Person = ({ person }) => {
	const data = new Date(person.dataNascimento);
	const cpf =
		person.cpf.slice(0, 3) +
		'.' +
		person.cpf.slice(4, 7) +
		'.' +
		person.cpf.slice(8, 11) +
		'-' +
		person.cpf.slice(-2);

	return (
		<>
			<PersonInfoContainer>
				<div>
					<small>Nome</small>
					<p>{person.nome}</p>
				</div>
				<div>
					<small>Aniversário</small>
					<p>{moment(data).locale('pt').format('LL')}</p>
				</div>
				<div>
					<small>CPF</small>
					<p>{cpf}</p>
				</div>
				<div>
					<small>Email</small>
					<p>{person.email}</p>
				</div>
			</PersonInfoContainer>
		</>
	);
};
export default Person;
