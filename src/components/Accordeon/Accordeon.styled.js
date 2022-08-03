import styled from 'styled-components';

export const AccordeonTab = styled.div`
	margin-bottom: 6px;
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	cursor: pointer;
`;

export const AccordeonContentContainer = styled.div`
	padding: 0 10px;
	max-height: 0;
	width: 100%;
	display: flex;

	justify-content: space-between;
	overflow: hidden;
	&.show {
		height: auto;
		max-height: 200px;
		overflow: auto;
	}
`;

//cada item no accordeon tem detail e div de botoes

export const AccordeonItemContainer = styled.li`
	text-decoration: none;
	display: flex;
	gap: 10px;
`;

export const AccordeonDetailsContainer = styled.div`
	margin-bottom: 10px;

	& div:first-child {
		display: flex;
		align-items: center;

		p {
			margin-left: 6px;
		}
	}
`;

export const AccordeonButtonsContainer = styled.div`
	display: flex;
	width: 300px;
	& button {
		margin-left: 10px;
	}
`;
