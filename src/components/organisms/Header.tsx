import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Imported components
import { theme } from '../utils';

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<h2>Header</h2>
			<Nav>
				<Link to='/'>Beers</Link>
				<Link to='/venues'>Venues</Link>
				<Link to='/contact'>Contact</Link>
			</Nav>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	background-color: ${theme.secondaryColor};
	display: flex;
	flex-direction: row;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
`;
