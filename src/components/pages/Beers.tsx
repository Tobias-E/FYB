import styled from 'styled-components';

// Imported components
import Search from '../../assets/Search.svg';
import { theme } from '../utils';

export const Beers: React.FC = () => {
	return (
		<Container>
			<ContextContainer>
				<H1>Find your beer!</H1>
				<p>
					Are you searching for a craft beer, <br />
					but doesn’t know where to buy it?
				</p>
			</ContextContainer>
			<Form>
				<Input placeholder='Search'></Input>
				<Button>
					<Img src={Search} alt='search button' />
				</Button>
			</Form>
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const H1 = styled.h1`
	margin-bottom: 0.5rem;
`;

const Form = styled.form`
	margin-top: 1.5rem;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Input = styled.input`
	height: 3rem;
	width: 25rem;
	padding: 1rem;
	border: 0;
	border-radius: 20px;
	box-shadow: 2px 4px 10px ${theme.primaryColor};
`;

const Button = styled.button`
	padding: 0;
	background-color: transparent;
	border: none;
	position: absolute;
	top: 25%;
	right: 15px;
`;

const Img = styled.img``;
