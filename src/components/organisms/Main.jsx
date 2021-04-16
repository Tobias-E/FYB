import styled, { keyframes } from 'styled-components';

// Imported Assets
import logo from '../../assets/logo.svg';
import { theme } from '../utils';

export const Main = () => {
	return (
		<MainStyled className='App-header'>
			<Rotate>
				<Logo src={logo} className='App-logo' alt='logo' />
			</Rotate>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<Link
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				Learn React
			</Link>
		</MainStyled>
	);
};

const MainStyled = styled.main`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Link = styled.a`
	color: ${theme.tertiaryColor};
`;

const Logo = styled.img`
	height: 40vmin;
	pointer-events: none;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	animation: ${rotate} infinite 20s linear;
`;
