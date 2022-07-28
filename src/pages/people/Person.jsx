const Person = ({ person }) => {
	return (
		<li>
			<p>Nome: {person.nome}</p>
			<p>Data de Nascimento: {person.dataNascimento}</p>
			<p>CPF: {person.cpf}</p>
			<p>Email: {person.email}</p>
		</li>
	);
};
export default Person;
