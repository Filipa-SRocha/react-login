import { useFormik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
	FormLogin,
	FormLoginContainer,
	LoginContainer,
	LogoContainer,
	LogoImg,
} from './Login.styled';
import Logo from '../../images/logoImg.png';

const Login = () => {
	const { handleLogin } = useContext(AuthContext);

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
					<input
						id='senha'
						name='senha'
						type='password'
						placeholder='Password'
						onChange={formik.handleChange}
						value={formik.values.senha}
					/>

					<button type='submit'>Login</button>
				</FormLogin>
			</FormLoginContainer>
		</LoginContainer>
	);
};
export default Login;
