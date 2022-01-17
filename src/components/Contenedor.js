import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajon from "./Cajon";
import { Hidden, Box, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

import Cajitas from "./Cajitas";

const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <>
      <Navbar accionAbrir={accionAbrir} />
     
      <Hidden xlDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>

      <Hidden xlUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      
      <div className={classes.content}>
      
      
        <div className={classes.toolbar}> </div>
        
<Cajitas />
       
      </div>
    </>
  );
};

export default Contenedor;
