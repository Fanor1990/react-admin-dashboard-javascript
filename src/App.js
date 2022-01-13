import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaconfig";
import Navbar from "./components/Navbar";
import Button from "@material-ui/core/Button";

import Listas from "./components/Listas"
import Oculto from "./components/Oculto"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Button variant="contained" color="primary">
        buton
      </Button>
      <Button variant="contained" color="secondary">
        buton
      </Button>
      <Listas />

      <Oculto />

    </ThemeProvider>
  );
}

export default App;
