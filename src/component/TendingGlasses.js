import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import male from '../assets/male.webp';
import t1 from '../assets/t1.webp';
import t2 from '../assets/t2.webp';
import t3 from '../assets/t3.webp';
import t4 from '../assets/t1.webp';
import t5 from '../assets/t5.webp';

import '../Homepage.css'


const imgArr = [
    {
        img: t1,
        title: 'POLICE',
        srp: 999,
        mrp: 2190
    },
    {
        img: t2,
        title: 'INTIGRITI',
        srp: 999,
        mrp: 1590
    },
    {
        img: t3,
        title: 'KILLER',
        srp: 999,
        mrp: 2190
    },
    {
        img: t4,
        title: 'NERDLANE',
        srp: 999,
        mrp: 1590
    },
    {
        img: t5,
        title: 'POLICE',
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
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Trending Eyeglasses</Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ p: '0px 30px' }}>
                    <ReactSimplyCarousel

                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={1}
                        itemsToScroll={1}
                        // autoplay={true}
                        // autoplayDelay={2000}

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
                                    <Box sx={{ p: '20px', alignSelf: 'center', position: 'relative', bgcolor: 'transparent', }}>
                                        <Box sx={{ width: '370px', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
                                            <Box sx={{ height: '205px', width: '370px',  }}>
                                                <img src={ele.img} alt='glass' style={{width:'100%', height:'100%'}}/>
                                            </Box>
                                            <Box sx={{ height: '70px', width: '300px', }}>
                                                <Typography sx={{fontSize:'18px', color:'#424242', fontFamily:'sans-serif', fontWeight:'bold', textAlign:'center'}}>{ele.title}</Typography>
                                                <Typography sx={{fontSize:'17px', fontWeight:'bold', color:'#424242', textAlign:'center'}}>₹{ele.srp} <del style={{fontSize:'14px', color:'#bdbdbd'}}>₹{ele.mrp}</del></Typography>

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

export default TrendingGlasses


