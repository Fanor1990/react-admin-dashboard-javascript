import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const estilos = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = estilos();

  return (
    <div className={classes.root} >
      <AppBar position="static"  variant="contained" color="contained">
      <Toolbar>
          
          
          <Typography variant="h8" className={classes.title}>
          <Button>DevFanor</Button>
          </Typography>
          <IconButton edge="start"   variant="contained"aria-label="menu"  onClick={() => props.accionAbrir()} clone>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;