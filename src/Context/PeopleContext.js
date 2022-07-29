import { createContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { apiDBC } from '../api';

const PeopleContext = createContext();

const PeopleContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const handleDelete = async (id) => {
		try {
			await apiDBC.delete(`/pessoa/${id}`);
			// toast.success('Pessoa removida com sucesso!');
			// getPeople();
		} catch (error) {
			console.log('Erro =>', error);
			// toast.error('Erro! Não foi possível concluir o seu pedido.');
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

	const handleRegister = async (values) => {
		try {
			await apiDBC.post('/pessoa', values);
			console.log('Pessoa cadastrada com sucesso!');
			navigate('/people');
			// toast.success('Pessoa cadastrada com sucesso!');
		} catch (error) {
			console.log('erro => ', error.response);
			// toast.error('Erro no cadastro!');
		}
	};

	const handleEdit = async (id) => {
		//const { data } = await apiDBC.get(`/pessoa/lista-completa?idPessoa=${id}`);
		//console.log(data);

		navigate(`/people/update-person/${id}`);
		// setisEditMode(true);
	};

	const applyChanges = async (id, updatedPerson) => {
		try {
			await apiDBC.put(`/pessoa/${id}`, updatedPerson);
			//toast.success('Cadastro atualizado com sucesso!');
			navigate('/people');
		} catch (error) {
			console.log('Erro => ', error);
			//toast.error('Erro! Não foi possivel atualizar os dados!');
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
			}}
		>
			{children}
		</PeopleContext.Provider>
	);
};

export { PeopleContext, PeopleContextProvider };
