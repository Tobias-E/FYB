// Imported Components
import { GlobalStyle } from './utils';
import { Header, Footer, Main } from './organisms';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
