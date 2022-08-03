import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	PageContainer,
	FormContainer,
	StyledForm,
	Errors,
} from '../../components/Forms.styled';
import { ContactContext } from '../../Context/ContactContext';
import {
	PrimaryButton,
	SecondaryButton,
} from '../../components/button/Buttons';

const ContactsForm = ({ idPessoa, idContato }) => {
	const navigate = useNavigate();
	const { createContact, updateContact, isEditMode, getContacts } =
		useContext(ContactContext);

	const ContactSchema = Yup.object().shape({
		tipoContato: Yup.string().required('Campo obrigatório'),
		telefone: Yup.string()
			.required('Campo obrigatório')
			.min(1, 'Deve ter pelo menos 1 número')
			.max(14, 'Campo demasiado longo. (Máx: 14 números)'),

		descricao: Yup.string()
			.required('Campo obrigatório')
			.min(1, 'Deve ter pelo menos 1 caractere')
			.max(250, 'Campo demasiado longo. (Máx: 250 caracteres)'),
	});

	function validatePhone(value) {
		let error;

		if (value.length < 14) {
			error = 'Número inválido';
		}
		return error;
	}

	const handleCancel = () => {
		navigate('/people');
	};

	const [updateValues, setUpdateValues] = useState({});
	const getInicialValues = async () => {
		const contactsArray = await getContacts(idPessoa);

		const contact = contactsArray.find(
			(contact) => contact.idContato == idContato
		);

		setUpdateValues({
			telefone: contact.telefone,
			descricao: contact.descricao,
			tipoContato: contact.tipoContato,
		});
	};

	useEffect(() => {
		if (isEditMode) {
			getInicialValues();
		}
	}, []);

	const handleSubmit = (values, resetForm) => {
		if (isEditMode) {
			const contato = { ...values, idPessoa: idPessoa, idContato: idContato };

			updateContact(contato, resetForm);
			return;
		}
		createContact({ ...values, idPessoa: idPessoa }, resetForm);
	};

	return (
		<PageContainer>
			<FormContainer>
				<h2>Cadastro de Contato</h2>
				<StyledForm>
					<Formik
						initialValues={{
							tipoContato: isEditMode ? updateValues.tipoContato : ' ',
							telefone: isEditMode ? updateValues.telefone : '',
							descricao: isEditMode ? updateValues.descricao : '',
						}}
						enableReinitialize={true}
						validationSchema={ContactSchema}
						onSubmit={(values, { resetForm }) => {
							handleSubmit(values, resetForm);
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div>
									<label htmlFor='tipoContato'>Tipo*: </label>
									<Field
										component='select'
										id='tipoContato'
										name='tipoContato'
										multiple={false}
									>
										<option value='' hidden>
											Escolha uma opção
										</option>
										<option value='COMERCIAL'>Comercial</option>
										<option value='RESIDENCIAL'>Residencial</option>
									</Field>
									{errors.tipo && touched.tipo ? (
										<Errors>{errors.tipo}</Errors>
									) : null}
								</div>
								<div>
									<label htmlFor='telefone'>Telefone*</label>
									<Field name='telefone' validate={validatePhone}>
										{({ field, form, meta }) => (
											<NumberFormat
												{...field}
												format='(##)#####-####'
												mask='_'
												id='telefone'
												type='text'
											/>
										)}
									</Field>
									{touched.telefone && errors.telefone ? (
										<Errors>{errors.telefone}</Errors>
									) : null}
								</div>

								<div>
									<label htmlFor='descricao'>Descricao* </label>
									<Field name='descricao' />
									{errors.descricao && touched.descricao ? (
										<Errors>{errors.descricao}</Errors>
									) : null}
								</div>

								{isEditMode ? (
									<PrimaryButton text='Editar' type='submit' />
								) : (
									<PrimaryButton text='Cadastrar' type='submit' />
								)}
								<SecondaryButton text='Cancelar' onClick={handleCancel} />
							</Form>
						)}
					</Formik>
				</StyledForm>
			</FormContainer>
		</PageContainer>
	);
};
export default ContactsForm;
