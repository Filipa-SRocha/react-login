import styled from 'styled-components';
import { secondaryColor, primaryColor } from '../../consts';

export const PageContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	background-color: #363740;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.div.attrs((props) => ({
	className: props.className,
}))`
	padding: 32px;
	background-color: white;
	width: 360px;
	height: 520px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	> div:last-of-type {
		width: 100%;
		text-align: center;
		margin-top: 14px;
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

export const FormLogin = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 30px;
	color: #363740;

	.StrongPassword {
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
		margin-bottom: 20px;
		width: 100%;
		padding: 6px;
		background-color: #fcfdfe;
		border: 1px solid #f0f1f7;
		border-radius: 8px;
		font-size: 14px;
		color: #4b506d;
	}

	div {
		button {
			width: 20px;
			height: 20px;
			position: relative;
			top: -46px;
			right: -260px;
			background-color: transparent;
			color: grey;
			border: none;
			cursor: pointer;
		}
	}
`;

export const Errors = styled.div`
	color: red;
	font-size: 12px;
	margin-top: -12px;
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
