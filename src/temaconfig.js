
import { createTheme } from '@material-ui/core/styles';

import { purple, green, orange } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      
      main: orange[500],
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