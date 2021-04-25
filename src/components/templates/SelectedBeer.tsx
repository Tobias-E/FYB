import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Assets

// Imported Components

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
			<h2>{beer.title}</h2>
			<h5>{data.beers[0].breweries[0].title}</h5>
			<img src={data.beers[0].image[0].url} alt={data.beers[0].title} />
			<p>{`ABV – ${data.beers[0].alkohol}`}</p>
			{data.beers[0].venues.map((e) => (
				<div key={e.title}>
					<p>{e.title}</p>
					<p>{e.email}</p>
					<p>{e.phone}</p>
					<img src={e.logo.url} alt={e.title} />
				</div>
			))}
		</Container>
	);
};

const Container = styled.div``;
