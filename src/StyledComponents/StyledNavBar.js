import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as WyreLogo } from './../Assets/wyre-logo.svg'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    navBar: {
        height: '72px',
        backgroundImage: 'linear-gradient(-31deg, #0092FF 0%, #1A32AF 100%)'
    },
    wyreLogo: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        justifyItems:'right',
        marginTop: '20px'
    },
    item: {
        marginRight: theme.spacing(2),
        paddingRight: 2,        
    },
}));

export default function NavBar(){
  const classes = useStyles();

    return(
        <React.Fragment>
            <div className={classes.root}>
                <AppBar
                position={'fixed'}
                color={'primary'}
                className={classes.navBar}
                >
                <Toolbar>
                        <Typography 
                            className={classes.item}
                            variant="h6" 
                            align='center'
                        >
                            About
                        </Typography>
                        <Typography 
                            className={classes.item}
                            variant="h6" 
                            align='center'
                        >
                            FAQ
                        </Typography>

                        <WyreLogo 
                            edge="end" 
                            className={classes.wyreLogo} 
                            color="inherit" 
                            aria-label="Menu"
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                        /> 
                </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>

  )
}