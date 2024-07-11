import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  p: 0,
  width: 260,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  textTransform: 'uppercase'
};

export default function DataLeft() {
  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem sx={{ bgcolor: '#1A73E8', color:'#FFFFFF'}}>
        <ListItemText primary="ALL PROGRAMS" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Product Management" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Strategy & Leadership" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Fintech" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Senior Management" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Data Science" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Digital Transformation" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Business Analytics" />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}
