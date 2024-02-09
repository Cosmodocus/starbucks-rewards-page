import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Started from './components/Started.jsx';
import Tabbed from './components/Tabbed.jsx';
import Extras from './components/Extras.jsx';
import CardPayment from './components/CardPayment.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
	return (
		<>
			<main>
				<Navbar />
				<Hero />
				<Started />
				<Tabbed />
				<Extras />
				<CardPayment />
				<Footer />
			</main>
		</>
	);
};

export default App;
