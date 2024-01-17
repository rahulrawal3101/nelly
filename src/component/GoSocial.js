import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import h1 from '../assets/h1.webp';
import h2 from '../assets/h2.webp';
import h3 from '../assets/h3.webp';
import h4 from '../assets/h4.webp';
import h5 from '../assets/h5.webp';
import h6 from '../assets/h6.webp';

import '../Homepage.css'


const imgArr = [
    {
        img: h1,
        title: 'Harsh Pandit collections',
        
    },
    {
        img: h2,
        title: 'Akash Choudary Collections',
       
    },
    {
        img: h3,
        title: 'Palak Purswani Collections',
      
    },
    {
        img: h4,
        title: 'Sunayana Foxzdar Collections',
        
    },
    {
        img: h5,
        title: 'Pooja Gaur Collections',
        
    },
    {
        img: h6,
        title: 'Tanvi Takkar Collecions',
        
    },


]

const GoSocial = () => {
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
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: {lg:'25px', md:'22px', sm:'20px', xs:'18px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>#GoSocial With The Trends</Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ pt: '10px',  }}>
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
                                    <Box sx={{ p: '15px', alignSelf: 'center', position: 'relative', bgcolor: 'transparent',width:{lg:'290px',md:'290px',sm:'290px',xs:'285px'} }}>
                                        <Box sx={{ height: '390px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', border:'1px solid lightgrey' }}>
                                            <Box sx={{ height: '370px', width: '100%',  }}>
                                                <img src={ele.img} alt='glass' style={{width:'100%', height:'100%'}}/>
                                            </Box>
                                            <Box sx={{ height: '70px', width: '100%'}}>
                                                <Typography sx={{fontSize:'13px', color:'#424242', fontFamily:'sans-serif', fontWeight:'bold', textAlign:'center'}}>{ele.title}</Typography>
                                               

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

export default GoSocial


