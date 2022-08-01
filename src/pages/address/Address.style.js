import styled from 'styled-components';
import { primaryColor } from '../../consts';

export const FormWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 80%;
		margin-top: 20px;
		color: grey;
	}

	button {
		background-color: ${primaryColor};
		color: white;
		width: 100%;
		margin: 30px 0;
		height: 40px;
		box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
		border-radius: 8px;
		border: none;
	}
`;

export const FormContainer = styled.div`
	padding: 32px;
	background-color: white;
	width: 660px;
	height: 560px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: scroll;

	input,
	select {
		height: 26px;
		margin-bottom: 10px;
		border: 1px solid grey;
		padding-left: 4px;
	}

	select {
		background-color: white;
	}

	select:focus {
		border: 1px solid grey;
	}
`;
