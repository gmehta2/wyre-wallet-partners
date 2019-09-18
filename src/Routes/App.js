import React from 'react';
import './App.css';
import Main from './Main'
import NavBar from '../StyledComponents/StyledNavBar';

function App() {
  return (
    <div 
        className="App"
        style={{
            maxWidth: '100%',
            height: 'auto',
            position: 'relative',
            overflow: 'scroll',
            paddingBottom: '100px',
            paddingTop: '150px',
            alignItems: 'center',
        }}
    >
        <NavBar />
        <Main id='MetaMask' />
    </div>
  );
}

export default App;
