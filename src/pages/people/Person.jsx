const Person = ({ person }) => {
	return (
		<li>
			<p>Nome: {person.nome}</p>
			<p>Data de Nascimento: {person.dataDeNascimento}</p>
			<p>CPF: {person.cpf}</p>
			<p>Email: {person.email}</p>
		</li>
	);
};
export default Person;
