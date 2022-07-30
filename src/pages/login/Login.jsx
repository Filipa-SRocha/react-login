import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import {
	FormLogin,
	FormLoginContainer,
	LoginContainer,
	LogoContainer,
	LogoImg,
} from './Login.styled';
import Logo from '../../images/logoImg.png';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import PrimaryButton from '../../components/button/Buttons';

const Login = () => {
	const { handleLogin } = useContext(AuthContext);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const formik = useFormik({
		initialValues: {
			login: '',
			senha: '',
		},

		onSubmit: (values) => {
			console.log('aqui');
			handleLogin(values);
		},
	});

	const changePasswordVisibility = () => {
		isPasswordVisible
			? setIsPasswordVisible(false)
			: setIsPasswordVisible(true);
	};

	return (
		<LoginContainer>
			<FormLoginContainer>
				<LogoContainer>
					<img src={Logo} alt='Logo' />
					<h1>Dashboard Kit</h1>
					<p>Log In to Dashboard Kit</p>
					<p>Enter your username and password below</p>
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

					<label htmlFor='senha'>PASSWORD: </label>
					<div>
						<input
							id='senha'
							name='senha'
							type={isPasswordVisible ? 'text' : 'password'}
							placeholder='Password'
							onChange={formik.handleChange}
							value={formik.values.senha}
						/>
						<button type='button' onClick={changePasswordVisibility}>
							{isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
						</button>
					</div>

					<PrimaryButton text='Login' />
				</FormLogin>
				<div>
					<Link to='/new-account'>
						Ainda não tem conta?<span> Cadastre-se</span>
					</Link>
				</div>
			</FormLoginContainer>
		</LoginContainer>
	);
};
export default Login;
