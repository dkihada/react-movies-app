import React from 'react';
import { Header } from './layout/header/Header';
import { Footer } from './layout/footer/Footer';
import { Main } from './pages/main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StateProvider } from './services/Context';
import { Film } from './pages/film/Film';

function App() {
	return (
		<div>
			<Router basename='/react-movies-app'>
				<StateProvider>
					<Header />
					<main className='container'>
						<Switch>
							<Route exact path='/' component={Main} />
							<Route path='/film' component={Film} />
						</Switch>
					</main>
					<Footer />
				</StateProvider>
			</Router>
		</div>
	);
}

export default App;
