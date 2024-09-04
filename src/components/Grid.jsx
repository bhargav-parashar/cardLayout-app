import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '../components/Card';
import apidata from '../data/video-data.json'; 

export default function ResponsiveGrid() {
  const videoArray = apidata.videos;
  return (
    
    <Box sx={{ flexGrow: 1, 
       
    }}
    >
      
      <Grid container rowSpacing={1} columnSpacing={1} >
      
        {
            videoArray.map((video)=>{
                const{id, previewImage, genre, title, releaseDate, videoLink}=video;
                return (
                    
                    <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
                      <Card
                        imgLink={previewImage}
                        genre={genre}
                        title={title}
                        releaseDate={releaseDate}
                        videoLink = {`https://${videoLink}`}
                      />
                    </Grid>
                  );
              })
        }
       </Grid>
    </Box>
    
  );
}