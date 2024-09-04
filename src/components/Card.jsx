import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin:'auto', marginTop:'2vw'}}>
      <CardActionArea href={props.videoLink} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={props.imgLink}
          alt="Thumbnail"
        />
        <CardContent sx={{ display: 'flex', flexDirection:'column', alignItems:'flex-start' }}>
          <Typography color="text.secondary"  variant="subtitle2">{props.genre}</Typography>
          <Typography gutterBottom variant="h7">{props.title} </Typography>
          <Typography color="text.secondary"  variant="subtitle1">{props.releaseDate}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}