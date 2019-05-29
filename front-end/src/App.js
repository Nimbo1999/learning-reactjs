import React from 'react';
import Header from './components/Header/index'
import './style.css'
import Routes from './routes.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
