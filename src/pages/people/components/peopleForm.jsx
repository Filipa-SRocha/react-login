import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '../../../Context/PeopleContext';
import { FormWrapper } from './peopleForm.styled';
import { useNavigate } from 'react-router-dom';
import {
	PrimaryButton,
	SecondaryButton,
} from '../../../components/button/Buttons';

const PeopleForm = ({ isEditMode, id, personDetails }) => {
	const navigate = useNavigate();
	const { applyChanges, handleRegister } = useContext(PeopleContext);
	const [initialValues, setInitialValues] = useState({
		nome: '',
		dataNascimento: '',
		cpf: '',
		email: '',
	});

	const setup = () => {
		if (isEditMode) {
			let novaData;
			if (personDetails && personDetails.dataNascimento) {
				novaData = personDetails.dataNascimento.split('-').reverse().join('-');
			}

			setInitialValues({
				nome: personDetails.nome,
				dataNascimento: personDetails.dataNascimento && novaData,
				cpf: personDetails.cpf,
				email: personDetails.email,
			});
		}
	};

	useEffect(() => {
		setup();
	}, [personDetails]);

	const removeInputMasks = (person) => {
		person.cpf =
			person.cpf.slice(0, 3) +
			person.cpf.slice(4, 7) +
			person.cpf.slice(8, 11) +
			person.cpf.slice(12, 14);

		person.dataNascimento =
			person.dataNascimento.slice(-4) +
			'-' +
			person.dataNascimento.slice(3, 5) +
			'-' +
			person.dataNascimento.slice(0, 2);

		return person;
	};

	const handleSubmit = (values) => {
		const newPerson = removeInputMasks(values);
		isEditMode ? applyChanges(id, newPerson) : handleRegister(newPerson);
	};

	const handleCancel = () => {
		navigate('/people');
	};

	const RegisterSchema = Yup.object().shape({
		nome: Yup.string()
			.min(2, 'Deve ter pelo menos 2 caracteres')
			.max(255, 'Campo demasiado comprido. (Max: 250 caracteres)')
			.required('Nome obrigatório'),
		dataNascimento: Yup.string()
			.required('Campo obrigatório')
			.test('dataNascimento', 'Data inválida', (value) => {
				const year = value.slice(-4);
				const month = value.slice(3, 5) - 1;
				const day = value.slice(0, 2);
				const data = new Date(year, month, day);
				const hoje = new Date();
				return (
					data <= hoje && month <= 12 && month >= 1 && day <= 31 && day > 0
				);
			}),
		cpf: Yup.string().required('Campo obrigratório').max(20, 'Cpf inválido'),
		email: Yup.string()
			.email()
			.max(255, 'Campo demasiado comprido. (Max: 250 caracteres)'),
	});

	return (
		<FormWrapper>
			<Formik
				className={'formTest'}
				enableReinitialize // missing piece!!
				initialValues={initialValues}
				validationSchema={RegisterSchema}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values);
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
						<Field name='dataNascimento'>
							{({ field, form, meta }) => (
								<NumberFormat
									{...field}
									format='##-##-####'
									placeholder='DD-MM-AAAA'
									mask={['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']}
									id='dataNascimento'
									type='text'
									className={
										errors.phone && touched.phone
											? 'text-input error'
											: 'text-input'
									}
								/>
							)}
						</Field>
						{errors.dataNascimento && touched.dataNascimento ? (
							<div>{errors.dataNascimento}</div>
						) : null}
						<label htmlFor='cpf'>CPF: </label>
						<Field name='cpf'>
							{({ field, form, meta }) => (
								<NumberFormat
									{...field}
									format='###.###.###-##'
									id='cpf'
									type='text'
									className={
										errors.cpf && touched.cpf
											? 'text-input error'
											: 'text-input'
									}
								/>
							)}
						</Field>
						{errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
						<label htmlFor='email'>E-mail: </label>
						<Field name='email' />
						{errors.email && touched.email ? <div>{errors.email}</div> : null}
						{isEditMode ? (
							<PrimaryButton text='Editar' type='submit' />
						) : (
							<PrimaryButton text='Cadastrar' type='submit' />
						)}
						<SecondaryButton
							text='Cancelar'
							type='button'
							onClick={handleCancel}
						/>
					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
};
export default PeopleForm;
