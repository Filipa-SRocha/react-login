import styled from 'styled-components';

export const Container = styled.section`
	background-color: #e5e5e5;
`;

export const PersonContainer = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border: 1px solid grey;
`;

export const PersonInfoContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;
