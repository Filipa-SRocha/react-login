import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Users = () => {
	const { handleSignUp } = useContext(AuthContext);

	const SignupSchema = Yup.object().shape({
		login: Yup.string()
			.min(2, 'Login demasiado curto!')
			.max(50, 'Login demasiado longo!!')
			.required('Login obrigatório'),
		senha: Yup.string()
			.min(2, 'Senha demasiado curta!')
			.max(50, 'Senha demasiado longa!')
			.required('Senha obrigatória'),
	});

	return (
		<div>
			<h1>Cadastro de usuário</h1>

			<Formik
				initialValues={{
					login: '',
					senha: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					handleSignUp(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<label htmlFor='login'>Login: </label>
						<Field name='login' />
						{errors.login && touched.login ? <div>{errors.login}</div> : null}

						<label htmlFor='senha'>Senha</label>
						<Field name='senha' type='password' />
						{errors.senha && touched.senha ? <div>{errors.senha}</div> : null}

						<button type='submit'>Cadastrar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
export default Users;
