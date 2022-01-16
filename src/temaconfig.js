
import { createTheme } from '@material-ui/core/styles';

import { purple, green } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      
      main: green[200],
    },
    secondary: {
      
      main: '#11cb5f',
    },
    "inherit": {
      
        main: '#11cb5f',
      },
      
    
  },
});
export default theme