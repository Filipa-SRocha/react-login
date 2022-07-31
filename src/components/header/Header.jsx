import Menu from './Menu';
import { StyledHeader, LogoContainer } from './Header.styled';
import Logo from '../../images/logoImg.png';

const Header = () => {
	return (
		<StyledHeader>
			<LogoContainer>
				<img src={Logo} alt='Logo' />
				<h1>Dashboard Kit</h1>
			</LogoContainer>
			<Menu />
		</StyledHeader>
	);
};
export default Header;
