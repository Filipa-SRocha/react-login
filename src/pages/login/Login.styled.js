import styled from 'styled-components';
import { secondaryColor, primaryColor } from '../../consts';

export const FormContainer = styled.div`
	padding: 28px;
	background-color: white;
	width: 360px;
	height: 560px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	> div:last-of-type {
		margin-top: 10px;
		width: 100%;
		text-align: center;

		a {
			color: black;
		}
		&:hover {
			text-decoration: underline;
		}

		span {
			color: ${primaryColor};
		}
	}
`;

export const FormLogin = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	color: #363740;

	.StrongPassword {
		height: 30px;
		margin: 0;

		display: flex;
		align-items: center;
	}

	label,
	& label {
		margin-bottom: 6px;
		margin-top: 12px;
		margin-right: 6px;
		font-size: 12px;
	}

	input {
		margin-bottom: 4px;
		width: 100%;
		padding: 6px;
		background-color: #fcfdfe;
		border: 1px solid #f0f1f7;
		border-radius: 8px;
		font-size: 14px;
		color: #4b506d;
	}

	& div {
		height: 40px;
		margin-bottom: 40px;
	}

	& button {
		margin-top: 30px;
	}

	& div:last-of-type {
		button {
			width: 20px;
			height: 20px;
			position: relative;
			top: -58px;
			right: -268px;
			background-color: transparent;
			color: grey;
			border: none;
			cursor: pointer;
		}
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 200px;
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
