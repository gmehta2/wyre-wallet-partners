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
            <Grid item xs={4} style={{paddingBottom:50, paddingTop:100}} align='center'>
                <text style={{fontFamily: 'Futura-MediumItalic', color:'grey'}}> 
                <h2> How does it work? </h2>
                    </text>
                </Grid>
                <Grid container style={{paddingBottom: 200}} spacing={0} direction="row" align='center' justify='start'> 
                <Grid item xs={12} style={{paddingBottom:30}} justifyContent='flex-start'>
                    FAQ
                    </Grid>
    </Grid>
                </Grid> 
                 </>
    )
}