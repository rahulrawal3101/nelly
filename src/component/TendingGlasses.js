import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import w6 from '../assets/w6.webp';
import w7 from '../assets/w7.avif';
import w8 from '../assets/w8.avif';
import w9 from '../assets/w9.avif';
import w10 from '../assets/w10.avif';
import StarIcon from '@mui/icons-material/Star';

import '../Homepage.css'
import { Woman2 } from '@mui/icons-material';


const imgArr = [
    {
        img: w6,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },
    {
        img: w7,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },
    {
        img: w7,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },
    {
        img: w8,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },
    {
        img: w9,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },
    {
        img: w10,
        title: 'NERDLANE',
        srp: 999,
        mrp: 2990
    },


]

const TrendingGlasses = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);



    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1600); // Set your threshold for small screen width
        };

        // Initial check and event listener for window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log('hellonjdnjn', activeSlideIndex)
    return (
        <>
            <Grid container>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: '30px' }}>
                        <Typography sx={{ fontSize: { lg: '25px', md: '22px', sm: '20px', xs: '18px' }, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: '#424242' }}><a href='' style={{ color: '#424242' }}>Indian Wear - For you</a></Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ p: '0px 30px' }}>
                    <ReactSimplyCarousel

                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={1}
                        itemsToScroll={1}
                        autoplay={true}
                        autoplayDelay={3000}

                        // visibleSlideProps={{style:{border:'1px solid red'}}}

                        forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'transparent',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'grey',
                                cursor: 'pointer',
                                fontSize: '25px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                                display: isSmallScreen ? 'none' : 'block', // Hide on small screens
                            },
                            children: <span>{`>`}</span>,
                        }}
                        backwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'transparent',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'grey',
                                cursor: 'pointer',
                                fontSize: '25px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                                display: isSmallScreen ? 'none' : 'block', // Hide on small screens
                            },
                            children: <span>{`<`}</span>,
                        }}
                        responsiveProps={[
                            {
                                itemsToShow: 1,
                                itemsToScroll: 1,
                                minWidth: 480,

                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                minWidth: 600,
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                minWidth: 1024,
                            },
                        ]}

                        speed={300}
                        easing="linear"
                        centerMode



                    >


                        {
                            imgArr.map((ele, index) => {
                                return (
                                    <Box sx={{ p: '20px',   bgcolor: 'transparent', width: '370px',  display:'flex', justifyContent:'center', alignItems:'center' }}>

                                        <Paper sx={{ width: '250px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} elevation={0}>
                                            {/* <Box sx={{width:'100%', height:'70%', }}>
                                            <img src={ele.img} alt='womrn' style={{width:'100%', height:'100%', }}/>

                                        </Box> */}
                                            <Grid container >


                                                <Grid item xs={12}>
                                                    <Box sx={{ width: '100%', height: '300px', cursor: 'pointer', '&:hover': { transform: 'scale(1.05)', transition: 'transform 300ms' } }}>
                                                        <img src={ele.img} alt='veg' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />

                                                    </Box>

                                                </Grid>
                                                <Grid item xs={12} sx={{ p: '2px' }}>
                                                    <Typography sx={{ fontSize: '16px', mt: '5px', fontFamily:'serif' }}>Women Purple Yoke Design Kurta</Typography>
                                                </Grid>
                                                <Grid item xs={12} sx={{ display: 'flex', p: '2px', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: '19px',fontFamily:'serif' }}>₹1499 <del style={{ fontSize: '14px', color: 'grey', fontFamily:'serif' }}>₹2999</del></Typography>
                                                        <Typography sx={{ fontSize: '15px', color: 'grey' }}>50% off</Typography>
                                                    </Box>
                                                    <Button sx={{ background: 'linear-gradient(103deg, rgba(147,146,142,1) 0%, rgba(43,40,37,1) 66%, rgba(14,6,0,1) 100%)', color: 'white', p: '5px 35px', borderRadius: '20px', fontWeight: 'bold',fontFamily:'serif' }}>Add</Button>

                                                </Grid>
                                                {/* <Grid item xs={12} sx={{ p: '2px', pb: '10px' }}>
                                                    <Box sx={{ width: '150px', border: '1px solid grey', borderRadius: '10px', p: '4px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                        <StarIcon sx={{ fontSize: '13px', color: '#ffd740' }} />
                                                        <Typography sx={{ fontSize: '14px', color: 'grey' }}> New On The Menu</Typography>
                                                    </Box>

                                                </Grid> */}
                                            </Grid>

                                        </Paper>
                                        {/* <Box sx={{ width: '370px', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
                                            <Box sx={{ height: {lg:'205px', md:'205px', sm:'190px',xs:'180px'}, width: {lg:'370px', md:'370px', sm:'360px', xs:'350px'},display:'flex', justifyContent:'center'  }}>
                                                <img src={ele.img} alt='glass' style={{width:'100%', height:'100%'}}/>
                                            </Box>
                                            <Box sx={{ height: '70px', width: '300px', }}>
                                                <Typography sx={{fontSize:{lg:'18px', md:'17px', sm:'15px',xs:'15px'}, color:'#424242', fontFamily:'sans-serif', fontWeight:'bold', textAlign:'center'}}>{ele.title}</Typography>
                                                <Typography sx={{fontSize:{lg:'17px', md:'16px',sm:'15px',xs:'15px'}, fontWeight:'bold', color:'#424242', textAlign:'center'}}>₹{ele.srp} <del style={{fontSize:'14px', color:'#bdbdbd'}}>₹{ele.mrp}</del></Typography>

                                            </Box>

                                        </Box> */}



                                    </Box>
                                )
                            })
                        }

                    </ReactSimplyCarousel>
                </Grid>
            </Grid>

        </>
    )
}

export default TrendingGlasses


