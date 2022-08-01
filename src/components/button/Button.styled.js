import styled from 'styled-components';
import { primaryColor, primaryColorHover, secondaryColor } from '../../consts';

export const ButtonPrimary = styled.button`
	background-color: ${primaryColor};
	color: white;
	width: 100%;
	max-width: 300px;
	height: 40px;
	font-weight: 700;
	box-shadow: '0px 4px 12px rgba(55, 81, 255, 0.24)';
	border-radius: 8px;
	border: none;

	&:hover {
		background-color: ${primaryColorHover};
	}
`;

export const ButtonSecondary = styled.button`
	background-color: white;
	color: black;
	width: ${(props) => (props.width ? props.width : '100%')};

	height: 40px;
	font-weight: 700;
	box-shadow: '0px 4px 12px black';

	border-radius: 8px;
	border: 1px solid ${secondaryColor};

	&:hover {
		background-color: #c9c9c9;
	}
`;

export const SmallButton = styled.button`
	width: 24px;
	overflow-y: hidden;
	overflow-x: hidden;
	padding: 4px 3px;
	height: 26px;
	font-size: 14px;
	border-radius: 8px;
	border: 2px solid
		${(props) => (props.borderColor ? props.borderColor : 'transparent')};

	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'transparent'};

	color: ${(props) => (props.color ? props.color : 'black')};
	cursor: pointer;

	svg {
		margin-right: 4px;
	}

	&:hover {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		align-items: center;
		min-width: fit-content;
	}
`;

export const SmallerButton = styled.button`
	width: 16px;
	overflow-y: hidden;
	overflow-x: hidden;
	padding: 2px;
	height: 18px;
	font-size: 10px;
	border-radius: 2px;
	border: 1px solid
		${(props) => (props.borderColor ? props.borderColor : 'transparent')};

	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'transparent'};

	color: ${(props) => (props.color ? props.color : 'black')};
	cursor: pointer;

	svg {
		margin-right: 4px;
	}

	&:hover {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		align-items: center;
		width: fit-content;
	}
`;

export const ButtonAdd = styled.button`
	background-color: #d7b126;
	color: black;
	width: 180px;
	height: 28px;
	border-radius: 8px;
	border: none;
	font-size: 16px;
	font-weight: 600;

	&:hover {
		background-color: #b39320;
	}
`;
