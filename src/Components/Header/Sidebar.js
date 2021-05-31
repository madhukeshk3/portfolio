import React from 'react';
import { makeStyles, IconButton,SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import MenuIcon from '@material-ui/icons/Menu';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

const useStyles = makeStyles({
  list: {
    width: 200,
    display:"flex",
    flexDirection:"column",
    
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <IconButton onClick={toggleDrawer(anchor, false)} style={{justifyContent:"left"}} >
            <ClearOutlinedIcon />
          </IconButton>
      <List className={classes.list}>
        
          
        {[['Projects','project'], ['Contact','contact'],<Brightness2OutlinedIcon/>].map((text, index) => (
          index!=2 ? <a href={`#${text[1]}`} style={{color:'black'}}> <ListItem button key={text} style={{textAlign:"center"}}>
                      <ListItemText primary={text[0]} />
                    </ListItem>
                    </a>:
          <ListItem button key={text} style={{textAlign:"center"}}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     
    </div>
  );

  return (
    <div style={{marginLeft: "auto"}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton aria-label="menu" onClick={toggleDrawer(anchor, true)} >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
