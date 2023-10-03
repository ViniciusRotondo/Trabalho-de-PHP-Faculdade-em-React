import React from 'react';
import Router from './router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
	  	<div className='App'>
        <Header />
				<Router />
        <Footer />
			</div>
	);
}

export default App;
