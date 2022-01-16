import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

const Cajitas = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Box
            bgcolor="default.main"
            color="default.contrastText"
            textAlign="left"
          >
            <Typography variant="h6">DevFanorLogo</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
            
          <Paper elevation={8} className={classes.paper}>Perfil
         </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
       
          <Paper elevation={8}>Vista General de Materias
          <Box
            color="secondary.contrastText"
            textAlign="left"
            p={30}
          ></Box>
          </Paper>
         
        </Grid>

        
        
        <Grid item xs={12} md={3} >
          <Paper  elevation={8} className={classes.paper} square>Actividad Recientes</Paper>
        </Grid>
        
        
       
      </Grid>
    </div>
  );
};

export default Cajitas;
