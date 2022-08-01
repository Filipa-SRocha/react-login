import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import {
	FormLogin,
	FormContainer,
	PageContainer,
	LogoContainer,
	LogoImg,
} from './Login.styled';
import Logo from '../../images/logoImg.png';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { PrimaryButton } from '../../components/button/Buttons';

const Login = () => {
	const { handleLogin } = useContext(AuthContext);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const SignInSchema = Yup.object().shape({
		login: Yup.string().required('Login obrigatório'),
		senha: Yup.string().required('Por favor digite a sua senha!'),
	});

	const formik = useFormik({
		initialValues: {
			login: '',
			senha: '',
		},
		validationSchema: SignInSchema,

		onSubmit: (values) => {
			handleLogin(values);
		},
	});

	const changePasswordVisibility = () => {
		isPasswordVisible
			? setIsPasswordVisible(false)
			: setIsPasswordVisible(true);
	};

	return (
		<PageContainer>
			<FormContainer>
				<LogoContainer>
					<img src={Logo} alt='Logo' />
					<h1>Dashboard Kit</h1>
					<p>Log In Dashboard Kit</p>
					<p>Introduza o seu nome de usuário e senha</p>
				</LogoContainer>

				<FormLogin onSubmit={formik.handleSubmit}>
					<label htmlFor='login'>LOGIN:</label>
					<input
						id='login'
						name='login'
						type='text'
						placeholder='Nome de usuário'
						onChange={formik.handleChange}
						value={formik.values.login}
					/>

					<label htmlFor='senha'>SENHA: </label>
					<div>
						<input
							id='senha'
							name='senha'
							type={isPasswordVisible ? 'text' : 'password'}
							placeholder='Senha'
							onChange={formik.handleChange}
							value={formik.values.senha}
						/>
						<button type='button' onClick={changePasswordVisibility}>
							{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
						</button>
					</div>

					<PrimaryButton type='submit' text='Login' />
				</FormLogin>
				<div>
					<Link to='/new-account'>
						Ainda não tem conta?<span> Cadastre-se</span>
					</Link>
				</div>
			</FormContainer>
		</PageContainer>
	);
};
export default Login;
