import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Imported Components
import { GlobalStyle } from './utils';
import { Header, Footer } from './organisms';
import { Beers, Venues, Contact } from './pages';

const App: React.FC = () => {
	return (
		<div className='App'>
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
				<Footer />
			</Router>
		</div>
	);
};

export default App;
