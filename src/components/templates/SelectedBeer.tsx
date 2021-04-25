import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Assets

// Imported Components
import { theme } from '../utils';

// Query
const SELECTEDBEER = gql`
	query searchBeer($item: String) {
		beers(where: { id: $item }) {
			id
			title
			alkohol
			image {
				url
			}
			breweries {
				title
			}
			venues {
				title
				email
				phone
				logo {
					url
				}
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
			venues: [
				{
					title: string;
					email: string;
					phone: string;
					logo: {
						url: string;
					};
				}
			];
		}
	];
}

export const SelectedBeer = () => {
	let { id } = useParams<{ id: string }>();
	const { loading, error, data } = useQuery<Idata, IbeerVars>(SELECTEDBEER, {
		variables: { item: id },
	});
	if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>Error 😱</h3>;
	if (data === undefined) return <h2>The beer is undefined, sorry 😢</h2>;
	const beer = data.beers[0];
	console.log(beer);
	return (
		<Container>
			<Beer>
				<ProductImg src={data.beers[0].image[0].url} alt={data.beers[0].title} />
				<Context>
					<h2>{beer.title}</h2>
					<h5>
						{beer.breweries.length > 1
							? data.beers[0].breweries.map((e) => ` ${e.title} |`)
							: beer.breweries[0].title}
					</h5>
					<p>{`ABV – ${data.beers[0].alkohol}%`}</p>
				</Context>
			</Beer>
			{data.beers[0].venues.map((e) => (
				<ContainerV key={e.title}>
					<ProductImgV src={e.logo.url} alt={e.title} />
					<ContextV>
						<H3>{e.title}</H3>
						<P>Email – {e.email}</P>
						<P>Phone – {e.phone}</P>
					</ContextV>
				</ContainerV>
			))}
		</Container>
	);
};
// Venue
const ContainerV = styled.div`
	padding: 0.5rem 3rem;
	margin: 1.5rem 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${theme.secondaryColor};
	box-shadow: 2px 4px 10px ${theme.shadowColor};
	border-radius: 20px;
	width: 70vw;
	height: 20vh;
`;

const ContextV = styled.div`
	height: 100%;
	padding: 1.3rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductImgV = styled.img`
	max-height: 85%;
	width: 10rem;
`;

const H3 = styled.h3`
	margin: 0;
`;

const P = styled.p`
	margin: 0;
`;

// Beer
const Container = styled.div`
	padding-bottom: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Beer = styled.div`
	margin: 4rem 0;
	padding: 0.5rem 3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70vw;
	height: 40vh;
	background-color: ${theme.secondaryColor};
	box-shadow: 2px 4px 10px ${theme.shadowColor};
	border-radius: 20px;
`;

const ProductImg = styled.img`
	max-height: 85%;
	width: 10rem;
`;

const Context = styled.div`
	margin: 0 3rem;
	display: flex;
	flex-direction: column;
`;
