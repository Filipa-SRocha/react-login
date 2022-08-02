import PeopleForm from '../components/peopleForm';

import { PageContainer, FormContainer } from '../../../components/Forms.styled';

const RegisterPerson = () => {
	return (
		<PageContainer>
			<FormContainer>
				<h2>Cadastrar uma nova pessoa</h2>

				<PeopleForm isEditMode={false} />
			</FormContainer>
		</PageContainer>
	);
};
export default RegisterPerson;
