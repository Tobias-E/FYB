import styled from 'styled-components';

// Imported components
import { theme } from '../utils';

export const Header = () => {
	return (
		<HeaderStyled>
			<h2>Header</h2>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	background-color: ${theme.secondaryColor};
`;
