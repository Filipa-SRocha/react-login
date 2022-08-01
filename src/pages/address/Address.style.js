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
		margin: 6px 0;
	}
	button:first-of-type {
		margin-top: 30px;
	}

	button:last-of-type {
		margin-bottom: 20px;
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
