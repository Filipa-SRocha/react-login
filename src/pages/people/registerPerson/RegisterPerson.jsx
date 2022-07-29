import PeopleForm from '../components/peopleForm';
import { FormBackground, FormContainer } from './RegisterPerson.styled';

const RegisterPerson = () => {
	return (
		<FormBackground>
			<FormContainer>
				<h2>Cadastrar uma nova pessoa</h2>

				<PeopleForm isEditMode={false} />
			</FormContainer>
		</FormBackground>
	);
};
export default RegisterPerson;
