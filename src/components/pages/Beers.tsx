import styled from 'styled-components';

// Imported components
import { theme } from '../utils';
import search from '../../assets/search.svg';
import arrow from '../../assets/arrow.svg';
import hydra from '../../assets/evenmorehydra.svg';

export const Beers: React.FC = () => {
	return (
		<Container>
			<Searchpanel>
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
						<Img src={search} alt='search button' />
					</Button>
				</Form>
			</Searchpanel>
			<Beer>
				<ProductImg src={hydra} alt='product image' />
				<TextContainer>
					<h3>Even more hydra</h3>
					<H5>Evil twin brewing NYC | Mortalis Brewing Company</H5>
					<p>ABV – 7%</p>
				</TextContainer>
				<Icon src={arrow} alt='arrow' />
			</Beer>
		</Container>
	);
};

const Beer = styled.div`
	width: 70vw;
	height: 12rem;
	background-color: ${theme.secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 2px 4px 10px ${theme.shadowColor};
	border-radius: 20px;
`;

const ProductImg = styled.img`
	height: 85%;
`;

const TextContainer = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
`;

const H5 = styled.h5`
	margin: 0.1rem;
`;

const Icon = styled.img`
	justify-self: flex-end;
	margin: 0 1.3rem 0 auto;
`;

// STAY!
const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Searchpanel = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0 3rem 0;
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
	box-shadow: 2px 4px 15px ${theme.shadowColor};
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
