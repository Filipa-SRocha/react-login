import styled from 'styled-components';
import { primaryColor, primaryColorHover, secondaryColor } from '../../consts';

export const Button = styled.button`
	background-color: ${(props) =>
		props.secondary ? { secondaryColor } : { primaryColor }};
	color: ${(props) => (props.secondary ? 'black' : 'white')};
	width: ${(props) => (props.secondary ? '80%' : '100%')};

	height: 40px;
	font-weight: 700;
	box-shadow: ${(props) =>
		props.secondary
			? '0px 4px 12px black'
			: '0px 4px 12px rgba(55, 81, 255, 0.24)'};

	border-radius: 8px;
	border: none;

	&:hover {
		background-color: ${(props) =>
			props.secondary ? '#c9c9c9 ' : { primaryColorHover }};
	}
`;

export const SmallButton = styled.button`
	min-width: 50px;
	min-width: fit-content;
	max-width: 200px;
	padding: 4px 8px;
	height: 32px;
	font-size: 14px;
	border-radius: 8px;
	border: 2px solid
		${(props) => (props.borderColor ? props.borderColor : 'gray')};
	background-color: ${(props) => (props.color ? props.color : 'transparent')};
	cursor: pointer;

	&:hover {
		background-color: grey;
	}
`;
