import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiDBC } from '../api';
import { toast } from 'react-toastify';
import { useState } from 'react';

const PeopleContext = createContext();

const PeopleContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [people, setPeople] = useState([]);

	const getPeople = async () => {
		try {
			const { data } = await apiDBC.get('/pessoa');
			setPeople(data.content);
			return;
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await apiDBC.delete(`/pessoa/${id}`);
			toast.success('Pessoa removida com sucesso!');
			navigate('/people');
			getPeople();
			return;
		} catch (error) {
			console.log('Erro =>', error);
			toast.error('Erro! Não foi possível concluir o seu pedido.');
		}
	};

	const getPerson = async (id) => {
		try {
			const { data } = await apiDBC.get(
				`/pessoa/lista-completa?idPessoa=${id}`
			);
			return data[0];
		} catch (error) {
			console.log(error);
		}
	};

	const handleRegister = async (values, formReset) => {
		try {
			console.log('PeoplContext -> handleRegister', values);
			await apiDBC.post('/pessoa', values);
			navigate('/people');
			formReset();
			toast.success('Pessoa cadastrada com sucesso!');
		} catch (error) {
			console.log('erro => ', error);
			toast.error('Erro no cadastro!');
		}
	};

	const handleEdit = async (id) => {
		navigate(`/people/update-person/${id}`);
	};

	const applyChanges = async (id, updatedPerson, formReset) => {
		try {
			await apiDBC.put(`/pessoa/${id}`, updatedPerson);
			toast.success('Cadastro atualizado com sucesso!');
			navigate('/people');
			formReset();
		} catch (error) {
			console.log('Erro => ', error);
			toast.error('Erro! Não foi possivel atualizar os dados!');
		}
	};

	return (
		<PeopleContext.Provider
			value={{
				handleEdit,
				handleDelete,
				getPerson,
				applyChanges,
				handleRegister,
				getPeople,
				people,
			}}
		>
			{children}
		</PeopleContext.Provider>
	);
};

export { PeopleContext, PeopleContextProvider };
