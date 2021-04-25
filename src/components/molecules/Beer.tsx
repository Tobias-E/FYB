import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

// Assets
import arrow from '../../assets/arrow.svg';

// Imported components
import { theme } from '../utils';
import { inputStorage } from '../Recoil';

// Query
const BEER = gql`
	query searchBeer($item: String) {
		beers(where: { title_contains: $item }) {
			id
			title
			alkohol
			image {
				url
			}
			breweries {
				title
			}
		}
	}
`;

// Interfaces
interface IbeerVars {
	item: string;
}

interface Idata {
	data: object;
	beers: [
		{
			title: string;
			id: string;
			alkohol: string;
			image: [{ url: string }];
			breweries: [{ title: string }];
		}
	];
}

export const Beer = () => {
	const input = useRecoilValue(inputStorage);
	// let skip: boolean = false;
	// input === undefined ? (skip = true) : (skip = false);
	const { loading, error, data } = useQuery<Idata, IbeerVars>(BEER, {
		variables: { item: input },
	});
	console.log(data);
	if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>Error </h3>;
	if (data === undefined) return <h2>The beer is undefined, sorry 😢</h2>;
	// if (data.beers.length === 0) return <h2>The beer doesn't exist in our database, sorry 😢</h2>;

	return (
		<>
			{data.beers.map(({ id, title, alkohol, image, breweries }) => (
				<Container key={id} to={`/beer/${id}`}>
					<ProductImg src={image[0].url} alt='product image' />
					<TextContainer>
						<h3>{title}</h3>
						<H5>{breweries[0].title}</H5>
						<p>ABV – {alkohol}%</p>
					</TextContainer>
					<Icon src={arrow} alt='arrow' />
				</Container>
			))}
		</>
	);
};

const Container = styled(Link)`
	margin-bottom: 2.5rem;
	padding: 1rem 0 1rem 1.5rem;
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
	max-width: 4.8rem;
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
