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
import banner20 from '../assets/banner20.jpg';
import banner19 from '../assets/banner19.webp';
import banner13 from '../assets/banner13.png';
import banner14 from '../assets/banner14.png';

const HeaderComp = () => {
  return (
    <>
    <Container disableGutters maxWidth='xl' >

 
    <Header/>
    <CrouselComp/>
    <Grid container sx={{ p:{lg:'10px 0px', md:'10px 0px', sm:'0px', xs:'0px'}, justifyContent:'space-between', }}>
        <Grid item lg={5.95} md={.95} sm={5.95} xs={12} sx={{ height:{lg:'230px', md:'230px', sm:'170px',xs:'90px'}}}>
            <img src={banner13} style={{width:'100%',height:'100%'}}/>

        </Grid>

        <Grid item lg={5.95} md={.95} sm={5.95} xs={12} sx={{ height:{lg:'230px', md:'230px', sm:'170px',xs:'90px'}}}>
        <img src={banner14} style={{width:'100%',height:'100%'}}/>
        </Grid>

    </Grid>
    <ItemCrousel/>
    <Glasses/>
    <GoSocial/>
    <TrendingGlasses/>
    <BuyOneGetOne/>
    <Brands/>
    <Grid container sx={{ p:'10px', justifyContent:'space-between', mt:'30px', mb:'10px'}}>
        <Grid item xs={5.95} sx={{height:{lg:'270px', md:'230px', sm:'170px',xs:'100px'}}}>
            <img src={banner19} style={{width:'100%', height:'100%'}}/>

        </Grid>

        <Grid item xs={5.95} sx={{height:{lg:'270px', md:'230px', sm:'170px',xs:'100px'}}}>
        <img src={banner20} style={{width:'100%', height:'100%'}}/>
        </Grid>

    </Grid>
     <TrendingGlasses />
     <SunGlasses/>
     <ItemCrousel/>
    <Accordiancmp/>
    {/* <Footer/> */}
    </Container>

    </>
  )
}

export default HeaderComp