import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import categories from '../../constant/categoryData';

export default function SideMenu({ setCategory }) {
  const [state, setState] = React.useState({ left: false });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? 'dark' : 'light' },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ padding: '0 2px ' }}>
        <List sx={{ padding: '15px' }}>
          <ListItemText
            primary={'Categories'}
            sx={{ textTransform: 'uppercase', color: 'gray' }}
          />
        </List>
        <Divider />
        {categories.map((text, i) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => setCategory(text)}
              style={{ height: 40, borderRadius: 4 }}
            >
              <ListItemText
                primary={text}
                sx={{ textTransform: 'uppercase' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)} sx={{ color: '#000' }}>
          <MenuIcon /> Menu
        </Button>

        <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
