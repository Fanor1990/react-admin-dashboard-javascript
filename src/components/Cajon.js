import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider } from "@material-ui/core";
import Listas from "./Listas";

const estilos = makeStyles((theme) => ({
  drawer: {
    width: 210,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 210,
  },
  toolbar: theme.mixins.toolbar,
}));

const Cajon = (props) => {
  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="bottom"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null }
    >
      <div className={classes.toolbar}></div>
      <Divider />

      <Listas />
    </Drawer>
  );
};

export default Cajon;
