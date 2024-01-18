import { Grid } from '@mui/material';
import React from 'react';
import videoimg from '../assets/videoimg.webp';
import buy1get1 from '../assets/buy1get1.webp';
import banner19 from '../assets/banner19.png'

const BuyOneGetOne = () => {
  return (
    <>
    <Grid container sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        <Grid item xs={11} sx={{ height:{lg:'350px', md:'270px', sm:'180px',xs:'90px'}}}>
            <img  src={banner19} alt='videoimg' style={{width:'100%', height:'100%'}}/>

        </Grid>
        {/* <Grid item xs={2.8}  sx={{height:{lg:'330px', md:'270px', sm:'180px',xs:'90px'}}}>
        <img  src={buy1get1} alt='videoimg' style={{width:'100%', height:'100%'}}/>
        </Grid> */}
    </Grid>
    </>
  )
}

export default BuyOneGetOne