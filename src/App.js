import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaconfig";

import Contenedor from "./components/Contenedor"
import Navbar from "./components/Navbar"



function App() {
  return (
    <ThemeProvider theme={theme}>
      
      

      <Contenedor/>

    </ThemeProvider>
  );
}

export default App;
