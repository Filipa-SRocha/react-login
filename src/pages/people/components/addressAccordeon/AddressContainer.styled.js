import styled from 'styled-components';

export const PersonAddressContainer = styled.div`
	margin-bottom: 10px;

	& div:first-child {
		display: flex;
		align-items: center;

		p {
			margin-left: 6px;
		}
	}
`;

export const AddressButtonsContainer = styled.div`
	display: flex;
	width: 300px;
	& button {
		margin-left: 10px;
	}
`;

export const AddressItemContainer = styled.li`
	text-decoration: none;
	display: flex;
	gap: 10px;
`;

export const AddressTitle = styled.div`
	margin-bottom: 6px;
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	cursor: pointer;
`;

export const AddressContent = styled.div`
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
