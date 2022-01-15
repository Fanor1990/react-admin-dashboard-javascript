import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
 
} from "@material-ui/core";
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded'; 
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BrandingWatermarkRoundedIcon from '@material-ui/icons/BrandingWatermarkRounded';


const Listas = () => {
    return (
      <> 
        
       
            <List component="nav" aria-label="cicle" >
            <ListItem button>
              <ListItemIcon>
                <HomeWorkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="General" />
            </ListItem>
         
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Mi Perfil" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <BrandingWatermarkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Mis Cursos" />
            </ListItem>
          </List>
          
      
        </>
      );
    };

export default Listas
