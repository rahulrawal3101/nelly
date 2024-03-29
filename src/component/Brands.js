import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import brand1 from '../assets/brand1.webp';
import brand2 from '../assets/brand2.webp';
import brand3 from '../assets/brand3.webp';
import brand4 from '../assets/brand4.webp';
import brand5 from '../assets/brand5.jpg';
import brand6 from '../assets/brand6.webp';
import brand7 from '../assets/brand7.webp';
import brand8 from '../assets/brand8.webp';

import '../Homepage.css'


const imgArr = [
    {
        img: brand1,
        title: 'Harsh Pandit collections',
        
    },
    {
        img: brand2,
        title: 'Akash Choudary Collections',
       
    },
    {
        img: brand3,
        title: 'Palak Purswani Collections',
      
    },
    {
        img: brand4,
        title: 'Sunayana Foxzdar Collections',
        
    },
    {
        img: brand5,
        title: 'Pooja Gaur Collections',
        
    },
    {
        img: brand6,
        title: 'Tanvi Takkar Collecions',
        
    },
    {
        img: brand7,
        title: 'Tanvi Takkar Collecions',
        
    },
    {
        img: brand8,
        title: 'Tanvi Takkar Collecions',
        
    },


]

const Brands = () => {
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
                    <Grid item xs={12}  sx={{mt:'13px', p:'0px 10px'}}>
                        <Typography sx={{ fontSize: {lg:'25px', md:'22px', sm:'20px', xs:'18px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Eyeglasses Brands</Typography>
                        <Typography sx={{fontSize:{lg:'15px', md:'14px', sm:'13px',xs:'13px'}, color:'grey', fontFamily:'sans-serif', textAlign: 'center'}}>Dazzle & captivate all eyes with Eyeglasses from International Brands</Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ pt:'15px' }}>
                    <ReactSimplyCarousel

                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={1}
                        itemsToScroll={1}
                        autoplay={true}
                        autoplayDelay={2000}

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
                                // display: isSmallScreen ? 'none' : 'block', // Hide on small screens
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
                                // display: isSmallScreen ? 'none' : 'block', // Hide on small screens
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
                                itemsToShow: 4,
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
                                    <Box sx={{ p: '0px 15px', alignSelf: 'center', position: 'relative', bgcolor: 'transparent',width:{lg:'290px',md:'290px',sm:'290px',xs:'285px'} }}>
                                        <Box sx={{ height: '370px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', border:'1px solid lightgrey' }}>
                                            <Box sx={{ height: '370px', width: '100%',  }}>
                                                <img src={ele.img} alt='glass' style={{width:'100%', height:'100%'}}/>
                                            </Box>
                                            

                                        </Box>


                                       
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

export default Brands


