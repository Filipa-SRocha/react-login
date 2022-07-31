import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useContext } from 'react';
import { apiCep } from '../../api';
import NumberFormat from 'react-number-format';
import { AddressContext } from '../../Context/AddressContext';

const Address = ({ idPessoa, AddressToEdit }) => {
	const { createAddress, isEditMode } = useContext(AddressContext);

	const handleCep = async (values) => {
		// const cep = values.cep.slice(0, 5) + values.cep.slice(6);
		// try {
		// 	const { data } = await apiCep.get(`/${cep}/json/`);
		// 	values.logradouro = data.logradouro;
		// 	values.estado = data.uf;
		// 	values.complemento = data.complemento;
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const GetCep = () => {
		// const { values } = useFormikContext();
		// useEffect(() => {
		// 	if (!values.cep.includes('_')) {
		// 		handleCep(values);
		// 	}
		// }, [values.cep]);
	};

	const handleAddress = (values) => {
		const newCep = values.cep.replaceAll('-', '');
		const newAddress = {
			idPessoa: parseInt(idPessoa),
			tipo: 'COMERCIAL',
			logradouro: values.logradouro,
			numero: parseInt(values.numero),
			complemento: values.complemento,
			cep: newCep,
			cidade: values.cidade,
			estado: values.estado,
			pais: values.pais,
		};

		createAddress(newAddress);
	};

	const SignupSchema = Yup.object().shape({
		cep: Yup.string()
			.min(8, 'Cep inválido!')
			.max(14, 'cep inválido!')
			.required('Cep Obrigatório'),
		logradouro: Yup.string().required('Campo obrigratório'),
		estado: Yup.string().required('Campo obrigratório'),
	});

	return (
		<div>
			<h1>Cadastro de Endereço</h1>

			<Formik
				initialValues={{
					tipo: isEditMode && AddressToEdit ? AddressToEdit.tipo : '',
					logradouro:
						isEditMode && AddressToEdit ? AddressToEdit.logradouro : '',
					numero: isEditMode && AddressToEdit ? AddressToEdit.numero : '',
					complemento:
						isEditMode && AddressToEdit ? AddressToEdit.complemento : '',
					cep: isEditMode && AddressToEdit ? AddressToEdit.cep : '',
					cidade: isEditMode && AddressToEdit ? AddressToEdit.cidade : '',
					estado: isEditMode && AddressToEdit ? AddressToEdit.estado : '',
					pais: isEditMode && AddressToEdit ? AddressToEdit.pais : '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					handleAddress(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<label htmlFor='cep'>CEP: </label>
						<Field name='cep'>
							{({ field, form, meta }) => (
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
						</Field>
						<GetCep />

						{errors.cep && touched.cep ? <div>{errors.cep}</div> : null}

						<label htmlFor='tipo'>Tipo: </label>
						<Field name='tipo' />
						{errors.tipo && touched.tipo ? <div>{errors.tipo}</div> : null}

						<label htmlFor='logradouro'>Logradouro</label>
						<Field name='logradouro' />
						{errors.logradouro && touched.logradouro ? (
							<div>{errors.logradouro}</div>
						) : null}

						<label htmlFor='numero'>Numero: </label>
						<Field name='numero' />
						{errors.numero && touched.numero ? (
							<div>{errors.numero}</div>
						) : null}

						<label htmlFor='complemento'>Complemento: </label>
						<Field name='complemento' />
						{errors.complemento && touched.complemento ? (
							<div>{errors.complemento}</div>
						) : null}

						<label htmlFor='cidade'>Cidade: </label>
						<Field name='cidade' />
						{errors.cidade && touched.cidade ? (
							<div>{errors.cidade}</div>
						) : null}

						<label htmlFor='estado'>Estado: </label>
						<Field name='estado' />
						{errors.estado && touched.estado ? (
							<div>{errors.estado}</div>
						) : null}

						<label htmlFor='pais'>País: </label>
						<Field name='pais' />
						{errors.pais && touched.pais ? <div>{errors.pais}</div> : null}

						<button type='submit'>Cadastrar Endereço</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
export default Address;
