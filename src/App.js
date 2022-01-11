import React from "react";
import Typography from '@material-ui/core/Typography'


//props de botones color, variant
//lavesitas truquito para importar todo el conenido de material ui de la carpetita
function App() {
  return (
    <div>
      <Typography variant="h1" color="initial">
      DevFanor
      </Typography>

      <Typography variant="body1" color="secondary" align="center" paragraph gutterBottom>
      Login
      </Typography>

      <Typography variant="body1" color="secondary" align="center" paragraph gutterBottom>
      Nombre de Usuario
      </Typography>

      <Typography variant="body1" color="secondary" align="center" gutterBottom>
      Contraseña
      </Typography>
     
      
    </div>
  );
}

export default App;
