import React from 'react'
import Header from '../component/Header'
import CrouselComp from '../component/CrouselComp'
import { Box, Container, Grid } from '@mui/material';
import male from '../assets/male.webp';
import female from '../assets/female.webp'
import mglasses from '../assets/MSunglasses.webp';
import wglasses from '../assets/WSunglasses.webp';
import ItemCrousel from '../component/ItemCrousel';
import GoSocial from '../component/GoSocial';
import Footer from '../component/Footer';
import Accordiancmp from '../component/Accordiancmp';
import Glasses from '../component/Glasses';
import TrendingGlasses from '../component/TendingGlasses';
import BuyOneGetOne from '../component/BuyOneGetOne';
import Brands from '../component/Brands';
import SunGlasses from '../component/SunGlasses';

const HeaderComp = () => {
  return (
    <>
    <Container disableGutters maxWidth='xl' >

 
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
    {/* <Glasses/> */}
    {/* <GoSocial/> */}
    {/* <TrendingGlasses/> */}
    {/* <BuyOneGetOne/> */}
    {/* <Brands/> */}
    {/* <Grid container sx={{ p:'10px', justifyContent:'space-between', mt:'60px', mb:'40px'}}>
        <Grid item xs={5.95} sx={{height:'230px'}}>
            <img src={mglasses} style={{width:'100%', height:'100%'}}/>

        </Grid>

        <Grid item xs={5.95} sx={{height:'230px'}}>
        <img src={wglasses} style={{width:'100%', height:'100%'}}/>
        </Grid>

    </Grid> */}
     {/* <TrendingGlasses /> */}
     {/* <SunGlasses/> */}
    {/* <Accordiancmp/> */}
    {/* <Footer/> */}
    </Container>

    </>
  )
}

export default HeaderComp