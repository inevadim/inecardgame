import styles from './Menu.module.scss';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <VideogameAssetIcon fontSize="large" />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Card Game
              <Button color="inherit">Кнопка 1</Button>
              <Button color="inherit">Кнопка 2</Button>
              <Button color="inherit">Кнопка 3</Button>
            </Typography>
            <Button color="inherit">Авторизация</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
