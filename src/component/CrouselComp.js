import React from 'react';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import banner11 from '../assets/banner11.jpg';
import banner12 from '../assets/banner12.jpg';
import banner22 from '../assets/banner22.webp';
import banner23 from '../assets/banner23.webp';
import banner24 from '../assets/banner24.webp';
import banner25 from '../assets/banner25.webp';
import banner26 from '../assets/banner26.webp';
import banner5 from '../assets/banner5.png';
import { Box, Grid } from '@mui/material';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CrouselComp = () => {

    const images = [{
        silde: banner11,
        caption: "Slide 1"

    },
    {
        silde: banner12,
        caption: "Slide 2"

    },
    {
        silde: banner5,
        caption: "Slide 4"
    },

    ];
    const images1 = [{
        silde: banner22,
        caption: "Slide 1"

    },
    {
        silde: banner23,
        caption: "Slide 2"

    },
    {
        silde: banner24,
        caption: "Slide 4"
    },
    {
        silde: banner25,
        caption: "Slide 4"
    },
    {
        silde: banner26,
        caption: "Slide 4"
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
                {/* <Grid item xs={12} >
                    <Slide {...proprietes}>
                        {
                            images.map((ele, index) => (


                                <Box key={index}>
                                    <Box sx={{ backgroundImage: `url(${ele.silde})`, display: "flex", alignItems: "center", justifyContent: "center", height: { lg: "320px", md: "200px", sm: "180px", xs: "125px" }, backgroundSize: "100% 100%", backgroundRepeat: 'no-repeat' }}>

                                    </Box>
                                </Box>
                            ))
                        }

                    </Slide>
                </Grid> */}

                <Grid item xs={12} >
                    <Slide {...proprietes}>
                        {
                            images1.map((ele, index) => (


                                <Box key={index}>
                                    <Box sx={{ backgroundImage: `url(${ele.silde})`, display: "flex", alignItems: "center", justifyContent: "center", height: { lg: "500px", md: "200px", sm: "180px", xs: "190px" }, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>

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