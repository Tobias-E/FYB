import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Imported components
import { theme } from '../utils';
import logo from '../../assets/logo.svg';

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Img src={logo} alt='Logo' />
			<Nav>
				<LinkS to='/'>Beers</LinkS>
				<LinkS to='/venues'>Venues</LinkS>
				<LinkS to='/contact'>Contact</LinkS>
			</Nav>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	width: 100%;
	padding: 1.5rem 4rem 1rem 2rem;
	/* background-color: ${theme.secondaryColor}; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Img = styled.img`
	max-height: 5rem;
`;

const Nav = styled.nav`
	width: 330px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const LinkS = styled(Link)`
	text-decoration: none;
	color: ${theme.textColor};
	font-weight: 500;
	font-size: 18px;
	:hover {
		text-decoration: underline;
	}
`;
