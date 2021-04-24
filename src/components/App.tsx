import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Imported Components
import { GlobalStyle, theme } from './utils';
import { Header } from './organisms';
import { Beers, Venues, Contact } from './pages';

const App: React.FC = () => {
	return (
		<Container className='App'>
			<Router>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/'>
						<Beers />
					</Route>
					<Route path='/venues'>
						<Venues />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
};

export default App;

const Container = styled.div`
	min-height: 100vh;
	height: 100%;
	background: linear-gradient(
			166.56deg,
			${theme.secondaryBackgroundColor} 21.3%,
			rgba(255, 255, 255, 0) 111.45%
		),
		${theme.backgroundColor};
`;
