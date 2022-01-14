import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";





const useStyle = makeStyles((theme) => ({
  
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xlUp')]:{
      display:'none',
    },


  },
  
  title: {
    flexGrow: 1,
  },
  appBar: {
    
        [theme.breakpoints.up('md')]:{
        width: `calc(100% - ${200}px)`,
        marginLeft: 200,
        },
      },
  
}));

const Navbar = (props) => {
  const classes = useStyle();

  return (
    <>
      <AppBar  color="secondary" className={classes.appBar}>
        <Toolbar>
          
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
        onClick={() => props.accionAbrir()}
        >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            DevFanor
          </Typography>
          
         
        
                
              
          <Button className={classes.menuButton} color="inherit">Usuario</Button>

        </Toolbar>
        
       
      </AppBar>
      
      </>
  )     
};
export default Navbar;
