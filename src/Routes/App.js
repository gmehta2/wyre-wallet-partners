import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Main'
import NavBar from '../StyledComponents/StyledNavBar';
import {getIdFromWallet} from './../config'

function App() {
    const[id, setId] = useState({})
    useEffect(() => {
        const url = window.location.href
        let start = url.indexOf('/') + 2
        let end
        if (url.indexOf('.', start) !== -1) {
            end = url.indexOf('.', start)
        } else {
            end = url.indexOf(':', start)
        }
        let wallet = url.substring(start, end)
        let res = getIdFromWallet(wallet)
        console.log(wallet)
        console.log(res)
        setId(res)
    }, [])

    return (
        <div 
            className="App"
            style={{
                maxWidth: '100%',
                height: 'auto',
                position: 'relative',
                overflow: 'scroll',
                paddingTop: '150px',
                alignItems: 'center',
            }}
        >
            <NavBar />
            <Main id={id} />
        </div>
    );
}

export default App;
