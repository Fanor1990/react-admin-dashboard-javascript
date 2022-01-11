import React from "react";
import Button from "@material-ui/core/Button";

//props de botones color, variant
//lavesitas truquito para importar todo el conenido de material ui de la carpetita
function App() {
  return (
    <div>
      <h1>Botones Color Fuente</h1>
      <Button color="default">textcolordefault</Button>

      <Button color="primary">textcolorprimary</Button>

      <Button color="secondary">txtcolorsecondary</Button>

      <Button color="inherit">txtcolorinherit</Button>

      <Button variant="text" color="default">
        fuentevarianttext
      </Button>

      <Button variant="contained" color="primary">
        fuentevariantcontained
      </Button>

      <Button variant="outlined" color="secondary">
        fuentevariantoutlined
      </Button>

      <Button variant="contained" color="inherit">
        fuentevariantcontained
      </Button>

      <Button variant="contained" color="inherit" disableElevation>
        fuentedisableelevation
      </Button>

      <Button variant="contained" color="secondary" href="https://google.com">
       Google
      </Button>

      <Button variant="contained" color="secondary" fullWidth>
       fullWhidth
      </Button>

      <Button variant="contained" color="secondary" size="small">
       small
      </Button>
      <Button variant="contained" color="secondary" size="large">
       large
      </Button>

      <Button variant="contained" color="secondary" size="medium">
       medium
      </Button>
    </div>
  );
}

export default App;
