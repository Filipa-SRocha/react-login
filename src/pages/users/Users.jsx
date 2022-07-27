import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { apiCep } from '../../api';
import NumberFormat from 'react-number-format';

const Users = () => {
	const { handleSignUp } = useContext(AuthContext);

	const handleAddress = async (values) => {
		const cep = values.cep.slice(0, 5) + values.cep.slice(6);
		console.log(cep);
		const { data } = await apiCep.get(`/${cep}/json/`);

		values.bairro = data.bairro;
		values.logradouro = data.logradouro;
		values.estado = data.uf;
		values.complemento = data.complemento;
	};

	const GetCep = () => {
		const { values } = useFormikContext();

		useEffect(() => {
			if (!values.cep.includes('_')) {
				handleAddress(values);
			}
		}, [values.cep]);
	};

	const SignupSchema = Yup.object().shape({
		login: Yup.string()
			.min(2, 'Login demasiado curto!')
			.max(50, 'Login demasiado longo!!')
			.required('Login obrigatório'),
		senha: Yup.string()
			.min(2, 'Senha demasiado curta!')
			.max(50, 'Senha demasiado longa!')
			.required('Senha obrigatória'),
		cep: Yup.string()
			.min(8, 'Cep inválido!')
			.max(14, 'cep inválido!')
			.required('Cep Obrigatório'),
		logradouro: Yup.string().required('Campo obrigratório'),
		bairro: Yup.string().required('Campo obrigratório'),
		estado: Yup.string().required('Campo obrigratório'),
	});

	return (
		<div>
			<h1>Cadastro de usuário</h1>

			<Formik
				initialValues={{
					login: '',
					senha: '',
					cep: '',
					logradouro: '',
					complemento: '',
					bairro: '',
					estado: '',
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

						<label htmlFor='cep'>CEP: </label>
						<Field
							name='cep'
							render={({ field }) => (
								<NumberFormat
									{...field}
									format='#####-###'
									mask='_'
									id='cep'
									type='text'
									className={
										errors.phone && touched.phone
											? 'text-input error'
											: 'text-input'
									}
								/>
							)}
						/>
						<GetCep />

						{errors.cep && touched.cep ? <div>{errors.cep}</div> : null}

						<label htmlFor='senha'>Logradouro</label>
						<Field name='logradouro' />
						{errors.logradouro && touched.logradouro ? (
							<div>{errors.logradouro}</div>
						) : null}

						<label htmlFor='senha'>Complemento: </label>
						<Field name='complemento' />
						{errors.complemento && touched.complemento ? (
							<div>{errors.complemento}</div>
						) : null}

						<label htmlFor='senha'>Bairro: </label>
						<Field name='bairro' />
						{errors.bairro && touched.bairro ? (
							<div>{errors.bairro}</div>
						) : null}

						<label htmlFor='senha'>Estado: </label>
						<Field name='estado' />
						{errors.estado && touched.estado ? (
							<div>{errors.estado}</div>
						) : null}

						<button type='submit'>Cadastrar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
export default Users;
