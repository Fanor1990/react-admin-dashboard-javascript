import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, ListItemIcon } from "@material-ui/core";
import Listas from "./Listas";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Toolbar from "@material-ui/core/Toolbar";
import {Typography, Button} from "@material-ui/core";

import {Box} from "@material-ui/core";


const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xlUp')]:{
      display:'flex',
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
    <div className={classes.root}>
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
       <Typography>
    <Box
          
          color="primary.contrastText"
         m={1}

          >
    
   
     <IconButton  onClick={props.onClose}  color="inherit" >
    <MenuIcon/>
    </IconButton>
    <Button>DevFanor</Button>
    </Box>
    <Divider />    
    
    
    
    
    <Listas  />
    </Typography>
      
     
     
      

      
      
    </Drawer>
    </div>
    
  );
};

export default Cajon;