import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { apiCep } from '../../api';
import NumberFormat from 'react-number-format';

const Address = () => {
	const handleCep = async (values) => {
		const cep = values.cep.slice(0, 5) + values.cep.slice(6);
		try {
			const { data } = await apiCep.get(`/${cep}/json/`);

			values.bairro = data.bairro;
			values.logradouro = data.logradouro;
			values.estado = data.uf;
			values.complemento = data.complemento;
		} catch (error) {
			console.log(error);
		}
	};

	const GetCep = () => {
		const { values } = useFormikContext();

		useEffect(() => {
			if (!values.cep.includes('_')) {
				handleCep(values);
			}
		}, [values.cep]);
	};

	const handleAddress = (values) => {
		//cadastrar endereço
	};

	const SignupSchema = Yup.object().shape({
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
			<h1>Cadastro de Endereço</h1>

			<Formik
				initialValues={{
					cep: '',
					tipo: '',
					logradouro: '',
					complemento: '',
					bairro: '',
					estado: '',
					pais: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					handleAddress(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
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

						<label htmlFor='tipo'>Tipo: </label>
						<Field name='tipo' />
						{errors.tipo && touched.tipo ? <div>{errors.tipo}</div> : null}

						<label htmlFor='logradouro'>Logradouro</label>
						<Field name='logradouro' />
						{errors.logradouro && touched.logradouro ? (
							<div>{errors.logradouro}</div>
						) : null}

						<label htmlFor='complemento'>Complemento: </label>
						<Field name='complemento' />
						{errors.complemento && touched.complemento ? (
							<div>{errors.complemento}</div>
						) : null}

						<label htmlFor='bairro'>Bairro: </label>
						<Field name='bairro' />
						{errors.bairro && touched.bairro ? (
							<div>{errors.bairro}</div>
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
