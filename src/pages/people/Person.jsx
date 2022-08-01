import { PersonInfoContainer } from './People.styled';
import { addCpfMask, displayDatePortuguese } from '../../utils/mascaras';

const Person = ({ person }) => {
	const ptDate = displayDatePortuguese(person.dataNascimento);
	const cpf = addCpfMask(person.cpf);

	return (
		<>
			<PersonInfoContainer>
				<div>
					<small>Nome</small>
					<p>{person.nome}</p>
				</div>
				<div>
					<small>Aniversário</small>
					<p>{ptDate}</p>
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
