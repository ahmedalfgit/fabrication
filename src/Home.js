import React from 'react';
import {Helmet} from 'react-helmet';
import FabProject from './components/mainFabProject';
import Services from './components/services';


const Home = () => {
	return (
		<div className="wrapper">
			<Helmet>
        <title>Serpentix Fabrication</title>
        <meta name="description" content="Serpentix Fabrication | We have the machines and skills to bring you project to life."/>
		<meta name="keywords" content="laser cutting, welding, robotic welding,
		metal forming, drilling, tapping, tig welding, mig welding, metal bending, 
		machining"/>
        <meta charSet="utf-8" />
      </Helmet>
	  
		<main className="fluid-container main-container">
			<FabProject />
			<Services />
		</main>
		</div>
	);
};

export default Home;
