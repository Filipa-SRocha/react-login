import styled from 'styled-components';
import { secondaryColor } from '../../consts';

export const PageContainer = styled.section`
	max-width: 960px;
	margin: 0 auto;
	margin-left: 240px;
`;

export const Container = styled.section``;

export const ListItemContainer = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px;
	min-height: 200px;
	max-height: 400px;
	width: 100%;
	border: 1px solid grey;
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
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: space-around;

	button {
		height: 24px;
		width: 80px;
	}
`;

export const AddressesContainer = styled.div`
	padding: 10px;

	display: flex;
	width: 100%;
`;

export const PersonInfoContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
`;
