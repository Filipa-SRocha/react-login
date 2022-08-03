import { createContext, useState } from 'react';
import { apiDBC } from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [isEditMode, setIsEditMode] = useState(false);

	const getContacts = async (idPessoa) => {
		try {
			const { data } = await apiDBC.get(`/contato/${idPessoa}`);

			return data;
		} catch (error) {
			console.log('Erro =>', error);
			toast('Erro.');
		}
	};

	const createContact = async (contato, resetForm) => {
		try {
			console.log('Contato no create', contato);
			await apiDBC.post(`/contato/${contato.idPessoa}`, contato);
			toast.success('Contato adicionado com sucesso!');
			navigate('/people');
			resetForm();
		} catch (error) {
			console.log('Erro =>', error);
			toast('Erro. Não foi possível adicionar contato');
		}
	};

	const updateContact = async (contato, resetForm) => {
		try {
			await apiDBC.put(`/contato/${contato.idContato}`, contato);
			toast.success('Contato alterado com sucesso!');
			navigate('/people');
			resetForm();
			setIsEditMode(false);
		} catch (error) {
			console.log('Erro =>', error);
			toast('Erro. Não foi possível alterar o contato');
		}
	};

	const deleteContact = async (idContato) => {
		try {
			await apiDBC.delete(`/contato/${idContato}`);
			toast.success('Contato removido com sucesso!');
			navigate('/people');
		} catch (error) {
			console.log('Erro =>', error);
			toast('Erro. Não foi possível eliminar o contato');
		}
	};

	return (
		<ContactContext.Provider
			value={{
				createContact,
				deleteContact,
				updateContact,
				getContacts,
				setIsEditMode,
				isEditMode,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};
export { ContactContext, ContactContextProvider };
