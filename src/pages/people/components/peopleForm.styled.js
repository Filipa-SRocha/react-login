import styled from 'styled-components';

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

	& button {
		margin-top: 20px;
	}

	& button:first-of-type {
		margin-top: 60px;
	}
`;
