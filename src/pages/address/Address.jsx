import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useContext } from 'react';
import { apiCep } from '../../api';
import NumberFormat from 'react-number-format';
import { AddressContext } from '../../Context/AddressContext';
import {
	PageContainer,
	FormContainerWider,
	StyledForm,
} from '../../components/Forms.styled';

import {
	PrimaryButton,
	SecondaryButton,
} from '../../components/button/Buttons';
import { useNavigate } from 'react-router-dom';
import { removeCepInputFormat, removeCepMask } from '../../utils/mascaras';
import { Errors } from '../../components/Forms.styled';

const Address = ({ idPessoa, idEndereco }) => {
	const navigate = useNavigate();

	const {
		createAddress,
		isEditMode,
		setIsEditMode,
		updateAddress,
		getAddressByAddressId,
	} = useContext(AddressContext);

	const handleCep = async (values) => {
		const cep = removeCepMask(values.cep);
		try {
			const { data } = await apiCep.get(`/${cep}/json/`);
			values.logradouro = data.logradouro;
			values.estado = data.uf;
			values.complemento = data.complemento;
			values.cidade = data.localidade;
		} catch (error) {
			console.log(error);
		}
	};

	const GetCep = () => {
		const { values } = useFormikContext();
		console.log('Action');
		useEffect(() => {
			if (!values.cep.includes('_')) {
				handleCep(values);
			}
		}, [values.cep]);
	};

	const handlePreviousData = async (values) => {
		const { data } = await getAddressByAddressId(idEndereco);

		values.tipo = data.tipo;
		values.logradouro = data.logradouro;
		values.numero = data.numero;
		values.complemento = data.complemento;
		values.cep = data.cep;
		values.cidade = data.cidade;
		values.estado = data.estado;
		values.pais = data.pais;
	};

	const GetPreviusData = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			handlePreviousData(values);
		}, []);
	};

	const handleSubmit = (values) => {
		const cleanAddress = cleanInputs(values);
		if (isEditMode) {
			setIsEditMode(false);
			updateAddress(idEndereco, cleanAddress);
			return;
		}
		createAddress(cleanAddress);
	};

	const handleCancel = () => {
		navigate('/people');
	};

	const cleanInputs = (values) => {
		const newCep = values.cep.replaceAll('-', '');
		const newAddress = {
			idPessoa: idPessoa,
			tipo: values.tipo,
			logradouro: values.logradouro,
			numero: parseInt(values.numero),
			complemento: values.complemento,
			cep: newCep,
			cidade: values.cidade,
			estado: values.estado,
			pais: values.pais,
		};
		return newAddress;
	};

	const SignupSchema = Yup.object().shape({
		cep: Yup.string()
			.min(8, 'Cep inválido!')
			.max(9, 'cep inválido!')
			.required('Cep Obrigatório'),

		tipo: Yup.string().required('Campo obrigatório'),
		logradouro: Yup.string()
			.required('Campo obrigatório')
			.min(3, 'Deve ter pelo menos 3 caracteres')
			.max(250, 'Campo demasiado longo. (Máx: 250 caracteres)'),
		numero: Yup.number('Deve ser um número').required('Campo obrigatório'),
		cidade: Yup.string()
			.required('Campo obrigatório')
			.min(2, 'Deve ter pelo menos 2 caracteres')
			.max(250, 'Campo demasiado longo. (Máx: 250 caracteres)'),
		estado: Yup.string()
			.required('Campo obrigatório')
			.min(2, 'Deve ter pelo menos 2 caracteres')
			.max(250, 'Campo demasiado longo. (Máx: 250 caracteres)'),
		pais: Yup.string()
			.required('Campo obrigatório')
			.min(2, 'Deve ter pelo menos 2 caracteres')
			.max(250, 'Campo demasiado longo. (Máx: 250 caracteres)'),
	});

	function validateCep(value) {
		let error;

		const newCep = removeCepInputFormat(value);

		if (newCep.length !== 8) {
			error = 'CEP Inválido';
		}
		return error;
	}

	return (
		<PageContainer>
			<FormContainerWider>
				<h2>Cadastro de Endereço</h2>
				<StyledForm>
					<Formik
						initialValues={{
							tipo: '',
							logradouro: '',
							numero: '',
							complemento: '',
							cep: '',
							cidade: '',
							estado: '',
							pais: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={(values, { resetForm }) => {
							handleSubmit(values);
							resetForm();
						}}
					>
						{({ errors, touched }) => (
							<Form>
								{isEditMode ? <GetPreviusData /> : ''}
								<div>
									<label htmlFor='cep'>CEP* </label>
									<Field name='cep' validate={validateCep}>
										{({ field, form, meta }) => (
											<NumberFormat
												{...field}
												format='#####-###'
												mask='_'
												id='cep'
												type='text'
											/>
										)}
									</Field>
									{touched.cep ? <GetCep /> : null}

									{errors.cep && touched.cep ? (
										<Errors>{errors.cep}</Errors>
									) : null}
								</div>
								<div>
									<label htmlFor='tipo'>Tipo*: </label>
									<Field
										component='select'
										id='tipo'
										name='tipo'
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
									<label htmlFor='logradouro'>Logradouro*</label>
									<Field name='logradouro' />
									{touched.logradouro && errors.logradouro ? (
										<Errors>{errors.logradouro}</Errors>
									) : null}
								</div>
								<div className='flexContainer'>
									<div>
										<label htmlFor='numero'>Numero* </label>
										<Field name='numero' />
										{errors.numero && touched.numero ? (
											<Errors>{errors.numero}</Errors>
										) : null}
									</div>

									<div>
										<label htmlFor='complemento'>Complemento </label>
										<Field name='complemento' />
										{errors.complemento && touched.complemento ? (
											<Errors>{errors.complemento}</Errors>
										) : null}
									</div>
								</div>
								<div>
									<label htmlFor='cidade'>Cidade* </label>
									<Field name='cidade' />
									{errors.cidade && touched.cidade ? (
										<Errors>{errors.cidade}</Errors>
									) : null}
								</div>
								<div className='flexContainer'>
									<div>
										<label htmlFor='estado'>Estado* </label>
										<Field name='estado' />
										{errors.estado && touched.estado ? (
											<Errors>{errors.estado}</Errors>
										) : null}
									</div>
									<div>
										<label htmlFor='pais'>País* </label>
										<Field name='pais' />
										{errors.pais && touched.pais ? (
											<Errors>{errors.pais}</Errors>
										) : null}
									</div>
								</div>

								{isEditMode ? (
									<PrimaryButton text='Editar' disable type='submit' />
								) : (
									<PrimaryButton text='Cadastrar' type='submit' />
								)}
								<SecondaryButton text='Cancelar' onClick={handleCancel} />
							</Form>
						)}
					</Formik>
				</StyledForm>
			</FormContainerWider>
		</PageContainer>
	);
};
export default Address;
