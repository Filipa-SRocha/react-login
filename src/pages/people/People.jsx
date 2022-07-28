import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import { apiDBC } from '../../api';
import Person from './Person';

const People = () => {
	const [people, setPeople] = useState([]);
	const [isEditMode, setisEditMode] = useState(false);

	useEffect(() => {
		getPeople();
	}, []);

	const getPeople = async () => {
		try {
			const { data } = await apiDBC.get('/pessoa');
			setPeople(data.content);
			return;
		} catch (error) {
			console.log(error);
		}
	};

	// Editar Pessoas
	const [personToEdit, setPersonToEdit] = useState({
		nome: '',
		dataNascimento: '',
		cpf: '',
		email: '',
	});

	const handleEdit = (person) => {
		setisEditMode(true);
		setPersonToEdit({ ...person });
	};

	const registerEdit = async (values) => {
		console.log('função confirmar ediçao pessoa', values);
		console.log('id', personToEdit.idPessoa);
		console.log(values);
		try {
			await apiDBC.put(`/pessoa/${personToEdit.idPessoa}`, values);
			toast.success('Cadastro atualizado com sucesso!');
		} catch (error) {
			console.log('Erro => ', error);
			toast.error('Erro! Não foi possivel atualizar os dados!');
		}

		getPeople();

		setisEditMode(false);
	};

	//Cadastrar Pessoas
	const handleRegister = async (values) => {
		try {
			await apiDBC.post('/pessoa', values);
			toast.success('Pessoa cadastrada com sucesso!');
			getPeople();
		} catch (error) {
			console.log('erro => ', error.response);
			toast.error('Erro no cadastro!');
		}
	};

	//Eliminar Pessoas
	const handleDelete = async (e) => {
		const id = e.target.id;
		try {
			await apiDBC.delete(`/pessoa/${id}`);
			toast.success('Pessoa removida com sucesso!');
			getPeople();
		} catch (error) {
			console.log('Erro =>', error);
			toast.error('Erro! Não foi possível concluir o seu pedido.');
		}
	};

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
		<div>
			{/* Cadastrar ou editar pessoas */}
			<section>
				<Formik
					enableReinitialize // missing piece!!
					initialValues={{
						nome: personToEdit.nome,
						dataNascimento: personToEdit.dataNascimento,
						cpf: personToEdit.cpf,
						email: personToEdit.email,
					}}
					validationSchema={RegisterSchema}
					onSubmit={(values, { resetForm }) => {
						isEditMode ? registerEdit(values) : handleRegister(values);
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
			</section>

			{/* Lista de Pessoas */}
			<ul>
				{people.map((person) => (
					<div key={person.idPessoa}>
						<Person person={person} />
						<button
							onClick={() => {
								handleEdit(person);
							}}
						>
							Editar
						</button>
						<button id={person.idPessoa} onClick={handleDelete}>
							Excluir
						</button>
					</div>
				))}
			</ul>
			<ToastContainer />
		</div>
	);
};
export default People;
