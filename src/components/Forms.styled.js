import styled from 'styled-components';
import { primaryColor } from '../consts';

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

export const Errors = styled.div`
	color: #973c3c;
	font-size: 12px;
`;

export const FormContainer = styled.div`
	padding: 20px 28px;
	background-color: white;
	width: 420px;
	height: 560px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	h2 {
		font-size: 20px;
	}
`;

export const FormContainerWider = styled.div`
	padding: 32px;
	background-color: white;
	width: 660px;
	height: 580px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: scroll;

	h2 {
		font-size: 20px;
	}
`;

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 30px;
	color: #303031;

	label,
	& label {
		margin-bottom: 6px;
		margin-right: 6px;
		font-size: 14px;
	}

	select {
		background-color: white;
	}

	select:focus {
		border: 1px solid grey;
	}

	& div {
		height: 76px;
	}

	input,
	select {
		margin-bottom: 2px;
		width: 100%;
		padding: 6px;
		background-color: #fcfdfe;
		border: 1px solid #bebebe;
		border-radius: 8px;
		font-size: 14px;
		color: #4b506d;
	}

	input:focus {
		outline: 1px solid ${primaryColor};
	}

	& button {
		margin-top: 10px;
	}

	& button:first-of-type {
		margin-top: 20px;
	}

	.flexContainer {
		width: 100%;
		display: flex;
		& div {
			display: flex;
			flex-direction: column;
		}

		& input:first-child {
			margin-right: 20px;
		}

		& div:nth-child(2) {
			margin-left: 20px;
		}
	}
`;
