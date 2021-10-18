import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StateProvider } from './services/Context';

import { Header } from './layout/header/Header';
import { Footer } from './layout/footer/Footer';
import { Home } from './pages/Home/Home';

import { Film } from './pages/Film/Film';
import { Top100 } from './pages/Top100/Top100';
import { Top250 } from './pages/Top250/Top250';
import { TopAwait } from './pages/TopAwait/TopAwait';

function App() {
	return (
		<div>
			<Router basename='/react-movies-app'>
				<StateProvider>
					<Header />
					<main className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/film' component={Film} />
							<Route path='/top_await_films' component={TopAwait} />
							<Route path='/top_100_popular_films' component={Top100} />
							<Route path='/top_250_best_films' component={Top250} />
						</Switch>
					</main>
					<Footer />
				</StateProvider>
			</Router>
		</div>
	);
}

export default App;
