import React from 'react';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';
import { Box, Grid } from '@mui/material';
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CrouselComp = () => {

    const images = [{
        silde: b1,
        caption:"Slide 1"

    },
    {
        silde: b2,
        caption:"Slide 2"

    },
    {
        silde: b3,
        caption:"Slide 3"

    },
    {
        silde: b4,
        caption:"Slide 4"
    }];
    const proprietes = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,
        
        
    }
    return (
        <>
        <Grid containetr>
            <Grid item xs={12} >
            <Slide {...proprietes}>
          {
            images.map((ele,index)=>(
            
                
                <Box key={index}>
                  <Box sx={{backgroundImage:`url(${ele.silde})`,display:"flex",alignItems:"center",justifyContent:"center",height:{lg:"280px",md:"200px",sm:"200px",xs:"200px"},backgroundSize:"100% 100%"}}>
                     
                  </Box>
                </Box>
            ))
          }
         
       </Slide>
            </Grid>
        </Grid>
        

       
       
        </>
    )
}

export default CrouselComp