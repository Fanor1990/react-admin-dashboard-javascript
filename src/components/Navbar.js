import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Box} from "@material-ui/core";
import {Typography, Button} from "@material-ui/core";
const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));





const Navbar = (props) => {
  const classes = estilos();
 
  

  return (
    
    <div className={classes.root}>
      <AppBar color="contained" >
      
      <Typography>
            
            <Box
          
          color="primary.contrastText"
         m={1}

          >
            <IconButton
            color="inherit"
            
            onClick={() => props.accionAbrir()}
          
        >
          
          <MenuIcon /> 
         
          </IconButton>
         
          <Button>DevFanor</Button>
          </Box>
         
          </Typography>
         
          
        
        
      </AppBar>
      
      
     </div>
  );
}
export default Navbar