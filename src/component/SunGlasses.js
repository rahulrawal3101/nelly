import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import sb1 from '../assets/sb1.webp';
import sb2 from '../assets/sb2.webp';
import sb3 from '../assets/sb3.webp';
import sb4 from '../assets/sb4.webp';
import sb5 from '../assets/sb5.webp';
import sb6 from '../assets/sb6.webp';


import '../Homepage.css'


const imgArr = [
    {
        img: sb1,
        title: 'Harsh Pandit collections',
        
    },
    {
        img: sb2,
        title: 'Akash Choudary Collections',
       
    },
    {
        img: sb3,
        title: 'Palak Purswani Collections',
      
    },
    {
        img: sb4,
        title: 'Sunayana Foxzdar Collections',
        
    },
    {
        img: sb5,
        title: 'Pooja Gaur Collections',
        
    },
    {
        img: sb6,
        title: 'Tanvi Takkar Collecions',
        
    },


]

const SunGlasses = () => {
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
                    <Grid item xs={12}  >
                        <Typography sx={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Sunglasses Brands</Typography>
                        <Typography sx={{fontSize:'15px', color:'grey', fontFamily:'sans-serif', textAlign: 'center'}}>Time to shade the Sun with Sunglasses from International Brands</Typography>

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
                                    <Box sx={{ p: '0px 15px', alignSelf: 'center', position: 'relative', bgcolor: 'transparent', }}>
                                        <Box sx={{ width: '300px', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', border:'1px solid lightgrey' }}>
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

export default SunGlasses


