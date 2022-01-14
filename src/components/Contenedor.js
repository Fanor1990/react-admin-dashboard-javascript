import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajon from "./Cajon";
import { Hidden } from "@material-ui/core";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button"

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
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
        <Hidden xsDown>
          <Cajon 
          variant="permanent"
          open={true}

          />
        </Hidden>

        <Hidden smUp>
          <Cajon 
          variant="temporary"
          open={abrir}
          onClose={accionAbrir}
          />
        </Hidden>

        <div className={classes.content}>
          <div className={classes.toolbar}> </div>
          Contenedor Contenido
      
        </div>
      </div>
      
      </>
  );
};

export default Contenedor;
