import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '../../../Context/PeopleContext';
import { StyledForm } from '../../../components/Forms.styled';
import { useNavigate } from 'react-router-dom';
import {
	PrimaryButton,
	SecondaryButton,
} from '../../../components/button/Buttons';
import {
	convertDateUsaToBr,
	removeCpfMask,
	removePeopleInputMasks,
} from '../../../utils/mascaras';
import { Errors } from '../../../components/Forms.styled';

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
				novaData = convertDateUsaToBr(personDetails.dataNascimento);
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

	const handleSubmit = (values, resetForm) => {
		const newPerson = removePeopleInputMasks(values);
		isEditMode
			? applyChanges(id, newPerson, resetForm)
			: handleRegister(newPerson, resetForm);
	};

	const handleCancel = () => {
		navigate('/people');
	};

	const RegisterSchema = Yup.object().shape({
		nome: Yup.string()
			.min(2, 'Deve ter pelo menos 2 caracteres')
			.max(255, 'Campo demasiado comprido. (Max: 250 caracteres)')
			.required('Nome obrigatório'),
		dataNascimento: Yup.string().required('Campo obrigatório'),
		//cpf: Yup.string().max(20, 'Cpf inválido').required('Campo obrigratório'),
		email: Yup.string()
			.required('Campo Obrigatório')
			.email()
			.max(255, 'Campo demasiado comprido. (Max: 250 caracteres)'),
	});

	function validateBirthday(value) {
		let error;
		const year = value.slice(-4);
		const month = value.slice(3, 5) - 1;
		const day = value.slice(0, 2);
		const data = new Date(year, month, day);
		const hoje = new Date();

		if (data >= hoje) {
			error = 'Data inválida (data no futuro)';
		}

		if (day <= 0 || day > 31) {
			error = 'Data Inválida (dia inválido)';
		}

		if (month < 0 || month > 11) {
			error = 'Data Inválida (mês inválido)';
		}

		if (day != data.getDate() || month != data.getMonth()) {
			error = 'Data Inválida ';
		}

		return error;
	}

	function validateCpf(value) {
		let error;
		console.log('inside validate cpf');
		const newCpf = removeCpfMask(value);
		console.log('o novo', newCpf);
		if (newCpf.length !== 11) {
			error = 'Cpf Inválido';
		}
		return error;
	}

	return (
		<StyledForm>
			<Formik
				className={'formTest'}
				enableReinitialize // missing piece!!
				initialValues={initialValues}
				validationSchema={RegisterSchema}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values, resetForm);
					return;
				}}
			>
				{({ errors, touched, isValidating }) => (
					<Form>
						<div>
							<label htmlFor='nome'>Nome: </label>
							<Field name='nome' />
							{errors.nome && touched.nome ? (
								<Errors>{errors.nome}</Errors>
							) : null}
						</div>
						<div>
							<label htmlFor='dataNascimento'>Data De Nascimento: </label>

							<Field name='dataNascimento' validate={validateBirthday}>
								{({ field, form, meta }) => (
									<NumberFormat
										{...field}
										format='##-##-####'
										placeholder='DD-MM-AAAA'
										mask={['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']}
										id='dataNascimento'
										type='text'
									/>
								)}
							</Field>
							{errors.dataNascimento && touched.dataNascimento ? (
								<Errors>{errors.dataNascimento}</Errors>
							) : null}
						</div>
						<div>
							<label htmlFor='cpf'>CPF: </label>

							<Field name='cpf' validate={validateCpf}>
								{({ field, form, meta }) => (
									<NumberFormat
										{...field}
										format='###.###.###-##'
										id='cpf'
										type='text'
									/>
								)}
							</Field>
							{errors.cpf && touched.cpf ? <Errors>{errors.cpf}</Errors> : null}
						</div>
						<div>
							<label htmlFor='email'>E-mail: </label>
							<Field name='email' />
							{errors.email && touched.email ? (
								<Errors>{errors.email}</Errors>
							) : null}
						</div>
						<div>
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
						</div>
					</Form>
				)}
			</Formik>
		</StyledForm>
	);
};
export default PeopleForm;
