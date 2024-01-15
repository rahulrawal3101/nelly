import React from 'react'
import Header from '../component/Header'
import CrouselComp from '../component/CrouselComp'
import { Box, Grid } from '@mui/material';
import male from '../assets/male.webp';
import female from '../assets/female.webp'
import ItemCrousel from '../component/ItemCrousel';
import GoSocial from '../component/GoSocial';
import Footer from '../component/Footer';
import Accordiancmp from '../component/Accordiancmp';

const HeaderComp = () => {
  return (
    <>
    <Header/>
    <CrouselComp/>
    <Grid container sx={{ p:'10px', justifyContent:'space-between'}}>
        <Grid item xs={5.95} sx={{height:'230px'}}>
            <img src={male} style={{width:'100%', height:'100%'}}/>

        </Grid>

        <Grid item xs={5.95} sx={{height:'230px'}}>
        <img src={female} style={{width:'100%', height:'100%'}}/>
        </Grid>

    </Grid>
    <ItemCrousel/>
    <GoSocial/>
    <Accordiancmp/>
    <Footer/>

    </>
  )
}

export default HeaderComp