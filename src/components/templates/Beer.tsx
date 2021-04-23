import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';

// Assets
import arrow from '../../assets/arrow.svg';
import hydra from '../../assets/evenmorehydra.svg';

// Imported components
import { theme } from '../utils';
import { inputStorage } from '../Recoil';

// Interfaces
interface Ibeer {
	id: string;
	title: string;
}

const BEER = gql`
	query searchBeer($item: String) {
		beers(where: { title_contains: $item }) {
			id
			title
		}
	}
`;

export const Beer = () => {
	const input = useRecoilValue(inputStorage);
	let skip: boolean = false;
	input === undefined ? (skip = true) : (skip = false);
	const { loading, error, data } = useQuery(BEER, { variables: { item: input } });
	console.log(data);
	/* if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>Error </h3>;
	if (data.beers.length === 0) return <h2>The beer doesn't exist in our database, sorry 😢</h2>;
	 */
	return (
		<h2>Hello</h2>
		/* data.beers.map(({id, title}) => (
		<Container key={id}>
			<ProductImg src={hydra} alt='product image' />
			<TextContainer>
				<h3>{title}</h3>
				<H5>Evil twin brewing NYC | Mortalis Brewing Company</H5>
				<p>ABV – 7%</p>
			</TextContainer>
			<Icon src={arrow} alt='arrow' />
		</Container>
		)) */
	);
};

const Container = styled.div`
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
