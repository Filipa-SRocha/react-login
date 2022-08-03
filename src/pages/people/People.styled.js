import styled from 'styled-components';
import { secondaryColor } from '../../consts';

export const PageContainer = styled.section`
	max-width: 960px;
	margin: 0 auto;
	margin-left: 240px;

	/* @media only screen and (max-width: 800px) {
		max-width: 460px;
		margin: 0 auto;
		margin-left: 40px;
	} */

	.peopleTitle {
		padding: 40px 0 20px 0;
		display: flex;
		width: 100%;
		justify-content: center;

		button {
			justify-self: flex-end;
		}
	}

	.addButtonContainer {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 10px;
	}
`;

export const Container = styled.section``;

export const ListItemContainer = styled.li`
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px;
	min-height: 160px;
	max-height: 400px;
	width: 100%;
	border: 1px solid grey;
	border-radius: 4px;
	box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
	margin-bottom: 28px;
`;

export const PersonContainer = styled.div`
	width: 100%;
	display: grid;
	height: 80px;
	padding-bottom: 10px;
	grid-template-columns: 4fr 1fr;
	border-bottom: 1px solid ${secondaryColor};
`;

export const ButtonContainer = styled.div`
	display: flex;
	/* flex-direction: column; */
	height: 100%;

	align-items: center;
	justify-content: flex-end;
	margin-top: -10px;
	& button {
		margin-left: 10px;
	}
`;

export const AccordeonsContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const PersonInfoContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: center;

	& div {
		display: flex;
		flex-direction: column;
		small {
			color: #a5a5a5;
			margin-top: -10px;
			margin-bottom: 10px;
		}
	}
`;
