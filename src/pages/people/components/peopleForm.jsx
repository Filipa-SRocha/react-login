import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '../../../Context/PeopleContext';

const PeopleForm = ({ isEditMode, id, personDetails }) => {
	const { applyChanges, handleRegister } = useContext(PeopleContext);
	const [initialValues, setInitialValues] = useState({
		nome: '',
		dataNascimento: '',
		cpf: '',
		email: '',
	});

	const setup = () => {
		if (isEditMode) {
			console.log('initial values test');
			setInitialValues({
				nome: personDetails.nome,
				dataNascimento: personDetails.dataNascimento,
				cpf: personDetails.cpf,
				email: personDetails.email,
			});
		}
	};

	useEffect(() => {
		setup();
	}, [personDetails]);

	const RegisterSchema = Yup.object().shape({
		nome: Yup.string()
			.min(2, 'Nome precisa de, no mínimo, 2 caracteres')
			.max(100, 'Nome demasiado grande!')
			.required('Nome obrigatório'),
		dataNascimento: Yup.string().required('Campo obrigatório'),
		cpf: Yup.string().required('Campo obrigratório').max(11, 'Cpf inválido'),
		email: Yup.string().email().required('Campo obrigratório'),
	});

	return (
		<Formik
			enableReinitialize // missing piece!!
			initialValues={initialValues}
			validationSchema={RegisterSchema}
			onSubmit={(values, { resetForm }) => {
				isEditMode ? applyChanges(id, values) : handleRegister(values);
				resetForm();
				return;
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<label htmlFor='nome'>Nome: </label>
					<Field name='nome' />
					{errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
					<label htmlFor='dataNascimento'>Data De Nascimento: </label>
					<Field
						name='dataNascimento'
						render={({ field }) => (
							<NumberFormat
								{...field}
								format='####-##-##'
								placeholder='YYYY-MM-DD'
								mask={['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D']}
								id='dataNascimento'
								type='text'
								className={
									errors.phone && touched.phone
										? 'text-input error'
										: 'text-input'
								}
							/>
						)}
					/>
					{errors.dataNascimento && touched.dataNascimento ? (
						<div>{errors.dataNascimento}</div>
					) : null}
					<label htmlFor='cpf'>CPF: </label>
					<Field name='cpf' />
					{errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
					<label htmlFor='email'>E-mail: </label>
					<Field name='email' />
					{errors.email && touched.email ? <div>{errors.email}</div> : null}
					{isEditMode ? (
						<button type='submit'>Editar</button>
					) : (
						<button type='submit'>Cadastrar</button>
					)}
				</Form>
			)}
		</Formik>
	);
};
export default PeopleForm;
