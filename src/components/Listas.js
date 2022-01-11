import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCardIcon from '@mui/icons-material/AddCard';
const Listas = () => {
    return (
        <div>
            <List component="nav" aria-label="cicle">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
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
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Mis Cursos" />
            </ListItem>
          </List>
          <Divider />
        </div>
      );
    };

export default Listas
