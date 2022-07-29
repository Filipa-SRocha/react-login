import PeopleForm from '../components/peopleForm';

const RegisterPerson = () => {
	return (
		<div>
			<h2>Cadastrar uma nova pessoa</h2>

			<PeopleForm isEditMode={false} />
		</div>
	);
};
export default RegisterPerson;
