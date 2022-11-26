import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export function ThemeButton() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button style={
        {background: '#D9D9D9',
         color:'#000000'}
        }>
            T1
        </Button>
      <Button style={
        {background:'#8A938F',
        color:'#FFF'}}
        >
            T2
        </Button>
    </ButtonGroup>
  );
}