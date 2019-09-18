import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    primary: {
        backgroundImage: 'radial-gradient(50% 100%, rgba(226,33,21,0.89) 23%, rgba(197,22,22,0.90) 23%, rgba(161,18,18,0.92) 23%, rgba(131,15,15,0.93) 23%, rgba(70,8,8,0.96) 23%, rgba(217,99,72,0.88) 23%, rgba(203,93,68,0.89) 28%, rgba(189,86,63,0.89) 33%, rgba(173,79,58,0.90) 38%, rgba(143,66,48,0.92) 49%, rgba(101,46,34,0.94) 64%, rgba(76,35,25,0.96) 73%, rgba(44,20,15,0.98) 84%, #000000 100%)',
        border: '1px solid #FFFFFF',
        borderRadius: '0 0 0 0',
        color: '#FFFFFF'
    },
}));

export default function StyledButton({style, to, onClick, color, component, text}) {
    const classes = useStyles()
    return (
        <Button
            className={color ? classes[color] : classes.primary}
            component={component}
            onClick={onClick}
            to={to}
            style={style}
        >
            {text}
        </Button>
    )
}