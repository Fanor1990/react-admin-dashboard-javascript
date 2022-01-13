import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaconfig";

import Navbar from "./components/Navbar"



function App() {
  return (
    <ThemeProvider theme={theme}>
      
      

      <Navbar/>

    </ThemeProvider>
  );
}

export default App;
