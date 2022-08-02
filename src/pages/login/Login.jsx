import { Form, Field, Formik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { FormLogin, FormContainer, LogoContainer } from './Login.styled';
import { PageContainer, Errors } from '../../components/Forms.styled';
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

				<FormLogin>
					<Formik
						initialValues={{
							login: '',
							senha: '',
						}}
						validationSchema={SignInSchema}
						onSubmit={(values) => {
							handleLogin(values);
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div>
									<label htmlFor='login'>LOGIN: </label>
									<Field name='login' placeholder='Nome de usuário' />
									{errors.login && touched.login ? (
										<Errors>{errors.login}</Errors>
									) : null}
								</div>

								<div>
									<label htmlFor='senha'>SENHA </label>
									<div style={{ margin: 0 }}>
										<Field
											name='senha'
											type={isPasswordVisible ? 'text' : 'password'}
											placeholder='Senha'
										/>

										<button type='button' onClick={changePasswordVisibility}>
											{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
										</button>
									</div>
									{errors.senha && touched.senha ? (
										<Errors>{errors.senha}</Errors>
									) : null}
								</div>

								<PrimaryButton type='submit' text='Login' />
							</Form>
						)}
					</Formik>
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
