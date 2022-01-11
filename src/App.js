import React from "react";
import Button from "@material-ui/core/Button"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaconfig"


function App() {


  return (
    
      <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        boton
      </Button>
      <Button variant="contained" color="secondary">
        boton
      </Button>
      </ThemeProvider>
     
      
    
  );
}

export default App;
