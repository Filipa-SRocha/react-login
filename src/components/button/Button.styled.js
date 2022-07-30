import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../consts';

export const Button = styled.button`
	background-color: ${primaryColor};
	color: white;
	width: 100%;
	height: 40px;
	box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
	border-radius: 8px;
	border: none;

	&:hover {
		background-color: ${primaryColorHover};
	}
`;
