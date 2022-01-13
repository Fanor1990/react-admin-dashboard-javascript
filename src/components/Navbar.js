import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {Hidden} from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@material-ui/core";
import Contenedor from "./Contenedor"



const useStyle = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(1),
  },
  
  title: {
    flexGrow: 1,
  },
  appBar: {
   
        width: `calc(100% - ${200}px)`,
        marginLeft: 200,
    },
  
}));


const Nabvar = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar  color="secondary" className={classes.appBar}>
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DevFanor
          </Typography>
          <Hidden smDown>
          <Button variant="default" color="inherit">
            
            <Link to="/login" style={{ color: '#000000' }}> Estudiantes</Link>
          </Button>
          <Button variant="default" color="inherit">
            
            <Link to="/logind" style={{ color: '#000000' }}> Docentes</Link>
          </Button>
          <Button variant="default" color="inherit">
          
            <Link to="/" style={{ color: '#000000' }}>Contacto </Link>
          </Button>
          <Button variant="default" color="inherit"> 
            
            <Link to="/" style={{ color: '#000000' }}>Preguntas Frecuentes</Link>
          </Button>
         
         
          </Hidden>
          <Hidden only={['md','lg']}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
           
          </IconButton> 
          </Hidden>         
         

        </Toolbar>
       
      </AppBar>
      <Contenedor />
      </>
  )     
};
export default Nabvar;
