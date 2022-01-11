import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaconfig";
import Navbar from "./components/Navbar";
import Button from "@material-ui/core/Button";

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
    </ThemeProvider>
  );
}

export default App;
