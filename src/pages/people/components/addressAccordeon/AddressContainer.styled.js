import styled from 'styled-components';

export const PersonAddressContainer = styled.div``;

export const AddressTitle = styled.div`
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
