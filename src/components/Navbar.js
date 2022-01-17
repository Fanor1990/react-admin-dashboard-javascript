import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';


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
      <AppBar   variant="contained" color="contained"  elevation={20}>
      <Toolbar>
          
          
          <Typography variant="h8" className={classes.title}>
          <Button>DevFanor</Button>
          </Typography>
          <IconButton edge="start"   variant="contained"aria-label="menu"  onClick={() => props.accionAbrir()} clone>
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      
      </AppBar>
      <Box border={2}
  bgcolor="primary.main"
  color="primary.contrastText"
  p={2}
  textAlign="left"
>
  LOGO
</Box>
    </div>
  );
}
export default Navbar;