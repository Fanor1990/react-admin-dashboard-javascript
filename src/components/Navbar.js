import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';







const Navbar = (props) => {
  
 
  

  return (
    
    <>
      <AppBar color="contained" >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => props.accionAbrir()}
           
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      
      
     </>
  );
}
export default Navbar