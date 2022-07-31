import { useParams } from 'react-router-dom';
import Address from './Address';

const RegisterAddressPage = () => {
	const { idPessoa } = useParams();

	return (
		<>
			{idPessoa ? (
				<div>
					<h1>Registre uma nova morada</h1>

					<Address idPessoa={idPessoa} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default RegisterAddressPage;
