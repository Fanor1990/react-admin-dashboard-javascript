import React from "react";
import { Grid, Box, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const Cajitas = () => {
  const paperStyle = { height: "80vh" };
  const classes = useStyles();
  return (
    
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={8} className={classes.paper}>
            Perfil
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={10} style={paperStyle}>
            Materias
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={8} className={classes.paper} square>
            Eventos Proximos{" "}
          </Paper>
        </Grid>
      </Grid>
   
  );
};

export default Cajitas;
