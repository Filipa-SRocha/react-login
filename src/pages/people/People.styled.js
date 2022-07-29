import styled from 'styled-components';

export const Container = styled.section`
	background-color: white;
	max-width: 1200px;
	margin: 0 auto;
`;

export const PersonContainer = styled.li`
	list-style: none;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	padding: 8px;
	height: 80px;
	border: 1px solid grey;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: space-around;

	button {
		height: 24px;
		width: 80px;
	}
`;

export const PersonInfoContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
`;
