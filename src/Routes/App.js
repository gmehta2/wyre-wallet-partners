import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Main'
import NavBar from '../StyledComponents/StyledNavBar';
import {getIdFromWallet} from './../config'
import BuyButton from './../Components/BuyButton'

function App() {
    const[id, setId] = useState({})
    useEffect(() => {
        const url = window.location.href
        let checkLocalHostStart = url.indexOf('/') + 2
        let checkLocalHostEnd = checkLocalHostStart + 9
        let wallet
        if (url.substring(checkLocalHostStart, checkLocalHostEnd) === 'localhost') {
            wallet = 'localhost'
        } else {
            let pathname = new URL(url).pathname
            wallet = pathname
        }
        let res = getIdFromWallet(wallet)
        console.log(wallet)
        console.log(res)
        setId(res)
    }, [id])

    console.log(id)
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
                backgroundImage: 'url(' + id.background + ')'
            }}
        >
            {/* <NavBar /> */}
            {/* <Main id={id} /> */}
            <BuyButton id={id} />
        </div>
    );
}

export default App;
