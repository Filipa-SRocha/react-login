import styled from 'styled-components';
import { secondaryColor } from '../../consts';

export const StyledHeader = styled.header`
	padding: 20px 0;
	width: 220px;
	height: 100vh;
	position: fixed;
	background-color: #363740;
	color: whitesmoke;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 76px;
		padding: 4px;
		background-color: white;
		border-radius: 100%;
		margin-bottom: 10px;
	}

	h1 {
		color: ${secondaryColor};
		font-size: 14px;
		margin-bottom: 20px;
	}
`;

export const NavList = styled.nav`
	display: flex;
	align-items: flex-start;
	width: 100%;
	flex-direction: column;
	& div:first-child {
		width: 100%;
		padding-bottom: 20px;
		border-bottom: 1px solid #dfe0eb;
	}

	& button {
		margin-left: 20px;
		position: relative;
		bottom: -240px;
	}
`;

export const MenuItem = styled.li`
	width: 80%;
	margin-top: 10px;
	padding-left: 20px;

	a {
		color: whitesmoke;
	}

	p {
		color: ${secondaryColor};
	}
`;
