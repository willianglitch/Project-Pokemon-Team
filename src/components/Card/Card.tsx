import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function PokemonCard() {
  return (
    <Card sx={{ width:'250px', height:'250px', borderRadius:'50%' ,border:'solid 4px #363636', display:'flex', alignItems:'center', justifyContent:'center',position:'relative'}}>
      <CardMedia 
        component="img"
        height="240"
        image="./public/assets/Mabosstiff.png"
        alt="Pokemon Mabosstiff"
      />
    </Card>
  );
}
