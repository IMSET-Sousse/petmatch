import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import PetList from '../compentes/PetList';
import MatchButton from './compentes/MatchButton';

const App = () => {
  const [pets] = useState([
    { id: 1, name: 'Max', type: 'Dog', breed: 'Golden Retriever', image: '/images/dog1.jpg' },
    { id: 2, name: 'Bella', type: 'Cat', breed: 'Siamese', image: '/images/cat1.jpg' },
    { id: 3, name: 'Charlie', type: 'Dog', breed: 'Beagle', image: '/images/dog2.jpg' },
    { id: 4, name: 'Molly', type: 'Cat', breed: 'Maine Coon', image: '/images/cat2.jpg' },
  ]);
  
  const handleMatch = () => {
    // Logic to filter and show a "match" for the user based on preferences
    alert("Let's find a match!");
  };

  return (
    <div className="app">
      <Header />
      <MatchButton onClick={handleMatch} />
      <PetList pets={pets} />
    </div>
  );
};

export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>   
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


