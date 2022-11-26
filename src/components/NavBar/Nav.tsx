import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeButton } from '../Button/ThemeButton';

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#262526'}}>
        <Toolbar>
            <Box style={{ display:'flex',width:'100%',justifyContent:'space-between' }}>
                <Box component="img" src="/public/assets/IconPokemonTeam.svg"/>
                <ThemeButton/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}