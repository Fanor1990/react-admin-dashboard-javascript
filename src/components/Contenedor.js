import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajon from "./Cajon";
import { Hidden } from "@material-ui/core";
import Navbar from "./Navbar";
import {Typography, Button} from "@material-ui/core";

import Toolbar from '@material-ui/core/Toolbar';
const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
            setAbrir(!abrir)
  }
  return (
    
  <>
      <Navbar accionAbrir={accionAbrir} />
     

      <div className={classes.root}>
        <Hidden xlDown>
          <Cajon 
          variant="permanent"
          open={true}

          />
        </Hidden>

        <Hidden xlUp>
          <Cajon 
          variant="temporary"
          open={abrir}
          onClose={accionAbrir}
          />
        </Hidden>
        
        
        <Button>DevFanor</Button>
        
        <div className={classes.content}>Contenedor Contenido
          
          
      
        </div>
      </div>
      
      </>
  );
};

export default Contenedor;