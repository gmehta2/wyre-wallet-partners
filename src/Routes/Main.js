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
            <Typography>Hi! Welcome {id} user!</Typography>
            <MetaMaskLogo style={{padding: 52}} />
            <Grid container spacing={0} direction="row" align='center' justify='center'>
                <Grid item xs={12}  align='center'>
                    <BuyButton />
                </Grid>
                <Grid item xs={4} align='center'>
                    <UsdcLogo />
                </Grid>
                <Grid item xs={4} align='center'>
                    <EthLogo />
                </Grid>
                <Grid item xs={4} align='center'>
                    <DaiLogo />
                </Grid>
            </Grid>
            <Typography>How does it work?</Typography>
        </>
    )
}