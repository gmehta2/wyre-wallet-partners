import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    primary: {
    background: 'black',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 58,
    padding: '10px 50px',
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