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
            <Typography><h1> <text style = {{fontFamily: 'Futura-MediumItalic' }}>Welcome {id} user! </text></h1></Typography>
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
            <Typography><h2> <text style={{fontFamily: 'Futura-MediumItalic'}}> HOW IT WORKS </text> </h2></Typography>
            <Typography><h3> <text style ={{color:'orange', fontFamily: 'Futura-MediumItalic'}}> MetaMask brings Ethereum to your Browser </text> </h3></Typography>
            <Typography> <h3><text style ={{color:'blue', fontFamily: 'Futura-MediumItalic'}}>Wyre brings fiat on ramp to your MetaMask wallet</text> </h3></Typography>

            <Grid container style={{paddingBottom: 200}} spacing={0} direction="row" align='center' justify='center'> 
            <Grid item xs={4} style={{paddingBottom:50}} align='center'>
                <text style={{fontFamily: 'Futura-MediumItalic'}}> 
                <h2>
                    Step 1
                    Step 2
                    Step 3
                    </h2>
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