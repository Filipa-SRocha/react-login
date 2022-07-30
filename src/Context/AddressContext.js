import { createContext } from 'react';
import { apiDBC } from '../api';

const AddressContext = createContext();

const testAddress = {
	idPessoa: 411,
	tipo: 'COMERCIAL',
	logradouro: 'Rua teste',
	numero: 202,
	complemento: 'ap 504',
	cep: '09890530',
	cidade: 'São Bernardo do Campo',
	estado: 'SP',
	pais: 'Br',
};

const createAddress = async (id, address) => {
	try {
		const testing = await apiDBC.post(
			`/endereco/${id}?idPessoa=411`,
			testAddress
		);
		console.log('enderço cadastrado');
		console.log(testing);
	} catch (error) {
		console.log(error);
	}

	//registrar o enderço no id da pessoa
};

const updateAddress = (id, newAddress) => {
	//faz o update com o id e os valores ja existentes
};

const deleteAddress = (id) => {
	//apaga enderço a partir do id da pessoa
};

const AddressContextProvider = ({ children }) => {
	return (
		<AddressContext.Provider
			value={{ createAddress, updateAddress, deleteAddress }}
		>
			{children}
		</AddressContext.Provider>
	);
};

export { AddressContextProvider, AddressContext };
