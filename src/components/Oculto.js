import React from 'react'
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'
const Oculto = (props) => {
    return (
        <div>
          <Typography variant="h6" color="initial">
              AnchoHidden: {props.width}
          </Typography>
          <Hidden smDown>

              <Button variant="contained" color="primary">
                smpeque1
              </Button>
          

              <Button variant="contained" color="primary">
                sxpeque2
              </Button>
              <Button variant="contained" color="primary">
                sxpeque3
              </Button>
              <Button variant="contained" color="primary">
                sxpeque4
              </Button>
              <Button variant="contained" color="primary">
                sxpeque5
              </Button>
          </Hidden>
          
        </div>
    )
}

export default withWidth()(Oculto)
