import styled from 'styled-components';

export const AddressContent = styled.div`
	padding: 0 10px;
	max-height: 0;
	overflow: hidden;
	&.show {
		height: auto;
		max-height: 200px;
		overflow: auto;
	}
`;
