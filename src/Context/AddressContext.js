import { createContext, useState } from 'react';
import { apiDBC } from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddressContext = createContext();

function AddressContextProvider({ children }) {
	const navigate = useNavigate();
	const [isEditMode, setIsEditMode] = useState(false);

	async function createAddress(address) {
		try {
			const { data } = await apiDBC.post(
				`/endereco/${address.idPessoa}?idPessoa=${address.idPessoa}`,
				address
			);
			toast.success('Novo endereço cadastrado!');
			navigate('/people');
		} catch (error) {
			toast.error('Erro no cadastro de endereço.');
			console.log(error);
		}
	}

	const getAddress = async (idPessoa) => {
		try {
			console.log(idPessoa);
			const { data } = await apiDBC.get(
				`/pessoa/lista-com-enderecos?idPessoa=${idPessoa}`
			);
			return data[0].enderecos;
		} catch (error) {
			console.log(error);
		}
	};

	const getAddressByAddressId = async (idEndereco) => {
		try {
			const endereco = apiDBC.get(`/endereco/${idEndereco}`);
			return endereco;
		} catch (error) {
			console.log('Erro =>', error);
		}
	};

	const updateAddress = async (idEndereco, newAddress) => {
		try {
			const endereco = await apiDBC.put(`/endereco/${idEndereco}`, newAddress);
			toast.success('Endereço atualizado com sucesso!');
			navigate('/people');
		} catch (error) {
			console.log('Erro =>', error);
			toast.error('Erro na atualização do endereço');
		}
	};

	const deleteAddress = async (id) => {
		//apaga endereço a partir do id da pessoa
		try {
			await apiDBC.delete(`/endereco/${id}`);
		} catch (error) {
			console.log('Erro => ', error);
		}
	};

	return (
		<AddressContext.Provider
			value={{
				createAddress,
				updateAddress,
				deleteAddress,
				getAddress,
				setIsEditMode,
				getAddressByAddressId,
				isEditMode,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
}

export { AddressContextProvider, AddressContext };
