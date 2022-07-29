import PeopleForm from '../components/peopleForm';
import { apiDBC } from '../../../api';

const RegisterPerson = () => {
	const handleRegister = async (values) => {
		try {
			await apiDBC.post('/pessoa', values);
			// toast.success('Pessoa cadastrada com sucesso!');
		} catch (error) {
			console.log('erro => ', error.response);
			// toast.error('Erro no cadastro!');
		}
	};

	return (
		<div>
			<h2>Cadastrar uma nova pessoa</h2>

			<PeopleForm isEditMode={false} handleRegister={handleRegister} />
		</div>
	);
};
export default RegisterPerson;
