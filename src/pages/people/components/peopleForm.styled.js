import styled from 'styled-components';
import { primaryColor } from '../../../consts';

export const FormWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;

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
		margin-top: 30px;
		height: 40px;
		box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
		border-radius: 8px;
		border: none;
	}
`;
