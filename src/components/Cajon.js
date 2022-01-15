import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider } from "@material-ui/core";
import Listas from "./Listas";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const estilos = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xlUp')]:{
      display:'none',
    },


  },
  
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 210,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 210,
  },
  
}));

const Cajon = (props) => {
  const classes = estilos();
  

  
  return (
    
    <Drawer 
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null }
      
    >
    
        
    
      <Toolbar ><IconButton edge="start" edge="start" onClick={props.onClose} className={classes.menuButton} color="inherit" >
    <MenuIcon/>
    </IconButton>
    
    <Typography variant="h6" className={classes.title}>
            DevFanor
          </Typography>
    </Toolbar >
      
      
      <Divider />
     
      

      <Listas  edge="start"/>
      
    </Drawer>
    
  );
};

export default Cajon;