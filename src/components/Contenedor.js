import React from 'react'
import { makeStyles } 
from '@material-ui/core/styles';

import Cajon from './Cajon';


const estilos = makeStyles(theme =>({
    root: {
    display:'flex'

    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
}))

const Contenedor = () => {
    const classes = estilos();
    return (
        <div className={classes.root}>
           
           <Cajon/>
            
            <div className={classes.content}>
            
                <div className={classes.toolbar}> </div>
                Contenedor Contenido

            </div>
        </div>
    )
}

export default Contenedor
