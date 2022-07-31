import { createContext, useState } from 'react';
import { apiDBC } from '../api';
import { useNavigate } from 'react-router-dom';

const AddressContext = createContext();

function AddressContextProvider({ children }) {
	const [isEditMode, setIsEditMode] = useState(false);
	// const moradaTeste = {
	// 	idPessoa: 440,
	// 	tipo: 'COMERCIAL',
	// 	logradouro: 'Rua da picaria',
	// 	numero: 1302,
	// 	complemento: 'ap 504',
	// 	cep: '09890530',
	// 	cidade: 'Porto',
	// 	estado: 'OP',
	// 	pais: 'string',
	// };

	async function createAddress(address) {
		console.log('inside create');
		console.log(address);
		try {
			console.log(address);
			const { data } = await apiDBC.post(
				`/endereco/${address.idPessoa}?idPessoa=${address.idPessoa}`,
				address
			);
			console.log('Cadastrado!!', data);
		} catch (error) {
			console.log(error);
		}
		//registrar o endereço no id da pessoa
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
			console.log('sucesso');
			return endereco;
		} catch (error) {
			console.log('Erro =>', error);
		}
	};

	const updateAddress = (idEndereco, newAddress) => {
		//faz o update com o id e os valores ja existentes
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
