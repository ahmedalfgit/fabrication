import React from 'react';
import FabProject from './components/mainFabProject';
import Services from './components/services';

const Home = () => {
	return (
		<main className="fluid-container main-container">
			<FabProject />
			<Services />
		</main>
	);
};

export default Home;
