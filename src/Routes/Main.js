import React from 'react';
import { ReactComponent as MetaMaskLogo } from './../Assets/WalletLogos/meta-mask-logo.svg'
import { ReactComponent as DaiLogo } from './../Assets/CurrencyLogos/dai-logo.svg'
import { ReactComponent as UsdcLogo } from './../Assets/CurrencyLogos/usdc-logo.svg'
import { ReactComponent as EthLogo } from './../Assets/CurrencyLogos/eth-logo.svg'
import Grid from '@material-ui/core/Grid';

import BuyButton from './../Components/BuyButton'
import { Typography } from '@material-ui/core';

export default function Main({id}) {

    return (
        <>
            <Typography><h1> <text style = {{fontFamily: 'Futura',color:'grey'}}>Welcome {id} user! </text></h1></Typography>
            <MetaMaskLogo style={{padding: 52}} />
            <Grid container style={{paddingBottom: 60}} spacing={0} direction="row" align='center' justify='center'>
                <Grid item xs={12} style={{paddingBottom:30}} align='center'>
                    <BuyButton />
                </Grid>
                <Grid container direction="row" justify="center" item xs={1} align='center'>
                    <UsdcLogo />
                </Grid>
                <Grid container direction="row" justify="center" item xs={1} align='center'>
                    <EthLogo />
                </Grid>
                <Grid container direction="row" justify="center" item xs={1} align='center'>
                    <DaiLogo />
                </Grid>
            </Grid>
            <Typography><h3> <text style={{fontFamily: 'Futura', color:'grey'}}> Fiat on ramp to MetaMask Wallet powered by <a href="https://www.sendwyre.com/" target="_blank"> Wyre </a></text> </h3> </Typography>
            
            <Typography><h3> <text style ={{color:'orange', fontFamily: 'Futura-MediumItalic'}}> </text> </h3></Typography>
            <Typography> <h3><text style ={{color:'blue', fontFamily: 'Futura-MediumItalic'}}></text> </h3></Typography>

            <Grid container style={{paddingBottom: 200}} spacing={0} direction="row" align='center' justify='center'> 
            <Grid item xs={4} style={{paddingBottom:10, paddingTop:100}} align='center'>
                <text style={{fontFamily: 'Futura-MediumItalic', color:'grey'}}> 
                <h2> FAQ </h2>
                    </text>
                </Grid>
                <Grid container style={{paddingBottom: 100}} spacing={0} direction="row" align='center' justify='center'> 
                <Grid item xs={4} style={{paddingBottom:30}} justifyContent='center'> 
                <text style={{fontFamily:'Futura', color:'grey'}}>
                    <h5>
                <p style={{color:'blue'}}> How does it work? </p>
                <p>There are 3 steps. First, you will connect your Apple Pay/ Google Pay or Debit card account. From this, we are able to collect simple KYC to ensure you are who you say you are. Next step is to indicate which currency you would like to buy! The whole process should only take 30 seconds :) </p>
                <p style={{color:'orange'}}>  What is Metamask? </p>
                <p>Metamask is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node. </p>
                <p style={{color:'blue'}}> What is Wyre? </p>
                <p>Wyre is a regulated Money Service Business (MSB) founded in 2013. We are bridging the gap between traditional banking and digital assets by offering an API for fiat on/off ramping into cryptocurrencies.  </p>
                <p style={{color:'orange'}}> How much am I able to purchase? </p>
                <p> If you are connecting your Apple/Google pay you will be able to purchase upto $250 a week. This limits will raise soon!</p>
                <p style={{color:'blue'}}> Where will my funds be stored? </p>
                <p> Once you purchase crypto on this site, you will see your funds deposited within your MetaMask wallet directly. </p>
                <p style={{color:'orange'}}>  What are the fees? </p>
                <p>Fees for debit card transactions are subject to an interchange fee so it totals to 2.9% + 30c. We do everything we can to have the lowest fees possible!</p>
                </h5>
                   </text>
                
                    </Grid>
    </Grid>
                </Grid> 
                 </>
    )
}