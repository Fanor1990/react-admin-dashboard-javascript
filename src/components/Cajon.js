import React from 'react'
import { makeStyles  } from '@material-ui/core/styles';
import {Drawer, Divider} from '@material-ui/core';
import Listas from './Listas'

const estilos = makeStyles((theme) => ({
    
    drawer: {
      
        width: 220,
        flexShrink: 0,
      },
      drawerPaper: {
      
        width: 220,
      },
      toolbar: theme.mixins.toolbar,

    }))

const Cajon = () => {
    const classes = estilos();
    return (
        
        <Drawer 
        
        className={classes.drawer}
            variant="permanent"
            classes={{ 
                paper: classes.drawerPaper,
             }}
            anchor = "left"
        >
            <div className={classes.toolbar}></div>
            <Divider />

          <Listas />


        </Drawer>
    )
}

export default Cajon
