import React from 'react';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import { Box, Grid } from '@mui/material';
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CrouselComp = () => {

    const images = [{
        silde: banner1,
        caption:"Slide 1"

    },
    {
        silde: banner2,
        caption:"Slide 2"

    },
    {
        silde: banner3,
        caption:"Slide 3"

    },
    {
        silde: banner4,
        caption:"Slide 4"
    },
    {
        silde: banner5,
        caption:"Slide 4"
    },
   
];
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
                  <Box sx={{backgroundImage:`url(${ele.silde})`,display:"flex",alignItems:"center",justifyContent:"center",height:{lg:"280px",md:"200px",sm:"180px",xs:"170px"},backgroundSize:"100% 100%"}}>
                     
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