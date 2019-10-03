import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import BuyButton from './../Components/BuyButton'
import { Typography, Link } from '@material-ui/core';

import { ReactComponent as DaiLogo } from './../Assets/CurrencyLogos/dai-logo.svg'
import { ReactComponent as UsdcLogo } from './../Assets/CurrencyLogos/usdc-logo.svg'
import { ReactComponent as EthLogo } from './../Assets/CurrencyLogos/eth-logo.svg'





export default function Main({id}) {
    const useStyles = makeStyles(theme => ({
        textMain: {
            fontFamily: 'Futura',
            color:'grey'
        },
        textColorOne: {
            color: id.primaryColor, 
            fontFamily: 'Futura-MediumItalic'
        },
        textColorTwo: {
            color: id.secondaryColor, 
            fontFamily: 'Futura-MediumItalic'
        },
        textParagraph: {
            fontFamily:'Futura', 
            color:'grey'
        },
        panel: {
            /* min height incase content is higher than window height */
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontFamily:'Futura',
            backgroundColor: id.backgroundColor
          /*   outline: 10px solid hotpink; */
            /* turn above on to see the edge of panels */
        }
    }));
    const classes=useStyles()
    return (
        <>
            <Typography variant='h4' className={classes.textMain}>Welcome {id.name} user!</Typography>
            {id.logo}
            <Grid container style={{paddingBottom: 60}} spacing={0} direction="row" align='center' justify='center'>
                <Grid item xs={12} style={{paddingBottom:30}} align='center'>
                    <BuyButton id={id} />
                </Grid>
                <Grid container direction="row" justify="center" item xs={3} sm={1} align='center'>
                    <UsdcLogo />
                </Grid>
                <Grid container direction="row" justify="center" item xs={3} sm={1} align='center'>
                    <EthLogo />
                </Grid>
                <Grid container direction="row" justify="center" item xs={3} sm={1} align='center'>
                    <DaiLogo />
                </Grid>
            </Grid>
            <Typography variant='h5' className={classes.textMain}> 1. Set up Apple Pay </Typography>
            <Typography variant='h5' className={classes.textMain} style={{paddingBottom: 70}}> 2. Buy Crypto directly to your {id.name} wallet! </Typography>
            <Typography variant='h5' className={classes.textMain} style={{textAlign: 'right', paddingRight: '5%'}}>Powered by {<Link href='https://www.sendwyre.com/' target='_blank'>Wyre</Link>}</Typography>
            <div className={classes.panel}>
            <Grid container spacing={0} direction="row" align='center' justify='center'> 
                <Grid item xs={4} style={{paddingBottom:10, paddingTop:100}} align='center'>
                </Grid>
                <Grid container spacing={0} direction="row" align='center' justify='center'> 
                    <Grid item xs={12} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorTwo}> How does it work? </Typography>
                            <Typography className={classes.textParagraph}> There are 3 steps. First, you will connect your Apple Pay/ Google Pay or Debit card account. From this, we are able to collect simple KYC to ensure you are who you say you are. Next step is to indicate which currency you would like to buy! The whole process should only take 30 seconds :) </Typography>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorOne}>  What is {id.name}? </Typography>
                            <Typography className={classes.textParagraph}> {id.description} </Typography>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorTwo}> What is Wyre? </Typography>
                            <Typography className={classes.textParagraph}> Wyre is a regulated Money Service Business (MSB) founded in 2013. We are bridging the gap between traditional banking and digital assets by offering an API for fiat on/off ramping into cryptocurrencies.  </Typography>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorOne}> How much am I able to purchase? </Typography>
                            <Typography className={classes.textParagraph}> If you are connecting your Apple/Google pay you will be able to purchase upto $250 a week. This limits will raise soon!</Typography>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorTwo}> Where will my funds be stored? </Typography>
                            <Typography className={classes.textParagraph}> Once you purchase crypto on this site, you will see your funds deposited within your {id.name} wallet directly. </Typography>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: 70, justifyContent: 'center'}}> 
                            <Typography className={classes.textColorOne}>  What are the fees? </Typography>
                            <Typography className={classes.textParagraph}> Fees for debit card transactions are subject to an interchange fee so it totals to 2.9% + 30c. We do everything we can to have the lowest fees possible!</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
            </div>
        </>
    )
}