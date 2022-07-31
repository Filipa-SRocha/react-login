import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import {
	PageContainer,
	FormLogin,
	LogoContainer,
	FormContainer,
} from './Login.styled';
import Logo from '../../images/logoImg.png';
import PrimaryButton from '../../components/button/Buttons';

const NewAccount = () => {
	YupPassword(Yup);
	const { handleSignUp } = useContext(AuthContext);
	const [isStrongPassword, setIsStrongPassword] = useState(false);

	const SignupSchema = Yup.object().shape({
		login: Yup.string()
			.min(2, 'Login demasiado curto!')
			.max(50, 'Login demasiado longo!!')
			.required('Login obrigatório'),
		senha: Yup.string()
			.password()
			.min(8, 'Senha precisa conter pelo menos oito letra caracteres')
			.minLowercase(1, 'Senha precisa conter pelo menos uma letra minuscula')
			.minUppercase(1, 'Senha precisa conter pelo menos uma letra maiuscula')
			.minNumbers(1, 'Senha precisa conter pelo menos um número')
			.minSymbols(1, 'Senha precisa conter pelo menos um caractere especial'),
	});

	return (
		<PageContainer>
			<FormContainer>
				<LogoContainer>
					<img src={Logo} alt='Logo' />

					<h1>Dashboard Kit</h1>
					<p>Create New Account</p>
					<p>Escolha um nome de usuário e uma senha</p>
				</LogoContainer>

				<Formik
					initialValues={{
						login: '',
						senha: '',
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						handleSignUp(values);
					}}
				>
					{({ errors, touched }) => (
						<FormLogin>
							<label htmlFor='login'>LOGIN: </label>
							<Field name='login' placeholder='Nome de usuário' />
							{errors.login && touched.login ? <div>{errors.login}</div> : null}

							<label htmlFor='senha'>SENHA: </label>

							<div>
								<Field name='senha' type='password' placeholder='Senha' />
							</div>
							{errors.senha && touched.senha ? <div>{errors.senha}</div> : null}

							<PrimaryButton type='submit' text='Cadastrar' />
						</FormLogin>
					)}
				</Formik>
				<div>
					<Link to='/' className={'testing'}>
						Já tem uma conta?<span> Faça Login</span>
					</Link>
				</div>
			</FormContainer>
		</PageContainer>
	);
};
export default NewAccount;
