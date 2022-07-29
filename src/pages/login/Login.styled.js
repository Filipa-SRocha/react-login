import styled from 'styled-components';
import { secondaryColor, primaryColor, primaryColorHover } from '../../consts';

export const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	background-color: #363740;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FormLoginContainer = styled.div`
	padding: 32px;
	background-color: white;
	width: 360px;
	height: 520px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const FormLogin = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 60px;
	color: ${secondaryColor};

	label {
		margin-bottom: 6px;
		font-size: 12px;
	}

	input {
		margin-bottom: 20px;
		padding: 6px;
		background-color: #fcfdfe;
		border: 1px solid #f0f1f7;
		border-radius: 8px;
		font-size: 14px;
		color: #4b506d;
	}

	button {
		background-color: ${primaryColor};
		color: white;
		width: 100%;
		height: 48px;
		box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
		border-radius: 8px;
		border: none;
	}

	button:hover {
		background-color: ${primaryColorHover};
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 72px;
	}

	h1 {
		color: ${secondaryColor};
		font-size: 14px;
		margin-bottom: 20px;
	}

	p:first-of-type {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 12px;
	}

	p {
		font-size: 14px;
		font-weight: 400;
	}
`;
