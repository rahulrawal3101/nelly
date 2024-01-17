import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import Footer from './Footer';
import { Box } from '@mui/system';
import offer1 from '../assets/offer-zone.jpeg';
import offer2 from '../assets/Home_Page_Thumb_250.jpeg';
import offer3 from '../assets/Home_Page_Thumb_500.jpeg';
import glass1 from '../assets/glass1.jpeg';
import glass2 from '../assets/glass2.jpeg';
import glass3 from '../assets/glass3.jpeg';
import glass4 from '../assets/glass4.jpeg';
import glass5 from '../assets/glass5.jpeg';
import glass6 from '../assets/glass6.jpeg';
import f1 from '../assets/f1.jpeg';
import f2 from '../assets/f2.jpeg';
import f3 from '../assets/f3.jpeg';
import f4 from '../assets/f4.jpeg';
import f5 from '../assets/f5.jpeg';
import f6 from '../assets/f6.jpeg';
import f7 from '../assets/f7.jpeg';
import f8 from '../assets/f8.jpeg';


const Accordiancmp = () => {

    const glasses =  [
        {
            id:1,
            image:glass1,
            name:'Aviator Eyeglasses',
            desc:'The Cool Twist On Classic'
        },
        {
            id:2,
            image:glass2,
            name:'Cateye Eyeglasses',
            desc:'Sharp, Stunning & Supreme'
        },
        {
            id:3,
            image:glass3,
            name:'Rectangle Eyeglasses',
            desc:'WFH Or Not, Look Stylish Every Day!'
        },
        {
            id:4,
            image:glass4,
            name:'Aviator Eyeglasses',
            desc:'The Cool Twist On Classic'
        },
        {
            id:5,
            image:glass5,
            name:'Aviator Eyeglasses',
            desc:'The Cool Twist On Classic'
        },
        {
            id:6,
            image:glass6,
            name:'Aviator Eyeglasses',
            desc:'The Cool Twist On Classic'
        }
    ];

    const lfeatures = [
        {
            id:1,
            name:'Blocks Blue Light',
            image:f1
        },
        {
            id:2,
            name:'Eliminates Glare',
            image:f2
        },
        {
            id:3,
            name:'Blocks UV Light',
            image:f3
        },
        {
            id:4,
            name:'Resists Scratches',
            image:f4
        },
        {
            id:5,
            name:'Resists Fingerprints & Smudges',
            image:f5
        },
        {
            id:6,
            name:'Repels Water & Liquids',
            image:f6
        },
        {
            id:7,
            name:'Repels Dust Particles',
            image:f7
        },
        {
            id:8,
            name:'Reduces Color & Image Distortion',
            image:f8
        }

    ];

    return (
        <>
            {/* <Header/> */}
            {/* <Grid container sx={{ marginTop:'50px' }}>

            </Grid> */}


             {/* offer container */}
             <Grid container sx={{ p:'0px 50px',bgcolor:'#F5F5F5',display:'flex',justifyContent:'space-around',alignItems:'center',p:{lg:'20px 150px',md:'15px 50px', sm:'10px 50px', xs:'10px 20px'},}}>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE',width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }} >
                        <img src={offer1} alt="offer1" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }}>
                        <img src={offer2} alt="offer2" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }}>
                        <img src={offer3} alt="offer3" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
            </Grid>
            {/* offer container end */}

            {/* Bestselling Eyeglasses Shapes */}

            <Grid container sx={{ mb:'20px' }}>
                <Grid item xs={12} sx={{p:'0px 20px'}}>
                <Typography sx={{ textAlign:'center',fontWeight:'bold',fontSize: {lg:'25px', md:'22px', sm:'20px', xs:'18px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Bestselling Eyeglasses Shapes</Typography>
                <Typography sx={{ fontSize:{lg:'15px', md:'14px', sm:'13px',xs:'13px'}, color:'grey', fontFamily:'sans-serif', textAlign: 'center' }}>Set new trends around with these eyemazing Eyeglasses Shapes!</Typography>
                </Grid>
                <Grid container sx={{p:{lg:'10px 50px'}, justifyContent:'center', alignItems:'center', mt:'15px' }}>
                    {
                            glasses.map((e)=>{
                                return (
                                    <Grid item lg={4} md={4} sm={5} xs={7} sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',mb:'5px',transition:'1s','&:hover':{transform:'scale(1.1)'} }}>
                                         <Box sx={{ height:{lg: '170px',md:'150px', sm:'150px', xs:'130px'}, width:{lg: '290px', md:'250px', sm:'250px', xs:'230px'},  }}>

                                        <img src={e.image} alt="" style={{ width:'100%',height:'100%' }} />
                                            </Box>
                                        <Typography sx={{ fontSize:'16px',fontWeight:'bold' }} >{e.name}</Typography>
                                        <Typography sx={{ fontSize:'14px',color:'#e5703c' }}>{e.desc}</Typography>
                                    </Grid>
                                );
                            })
                        }
                </Grid>
            </Grid>
            {/* Bestselling Eyeglasses Shapes end */}

            {/* lens Features */}

            <Grid container sx={{ bgcolor:'#F5F5F5' }}>
                <Grid item xs={12} sx={{mt:'20px'}}>
                <Typography sx={{ fontSize: {lg:'25px', md:'22px', sm:'20px', xs:'18px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Our Lens Features At A Glance</Typography>
                <Typography sx={{ fontSize:{lg:'15px', md:'14px', sm:'13px',xs:'13px'}, color:'grey', fontFamily:'sans-serif', textAlign: 'center' }}>Our lenses are designed keeping your comfort & versatile lifestyle in mind. <br />Get the best of features with your lenses here at EyeMyEye!</Typography>
                </Grid>
                <Grid container sx={{ p:{lg:'10px 100px 10px 100px'},justifyContent:'center', alignItems:'center', mt:'15px'}}>
                    {
                            lfeatures.map((e)=>{
                                return (
                                    <Grid item lg={3} md={3} sm={5} xs={10} sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',mb:'30px' }}>
                                        <Box sx={{width:'140px', height:'100px'}}>
                                             
                                        <img src={e.image} alt="" style={{ width:'100%',height:'100%' }} />
                                        </Box>
                                        <Typography sx={{ fontSize:'16px' }} >{e.name}</Typography>
                                    </Grid>
                                );
                            })
                        }
                    
                </Grid>
            </Grid>
            {/* Lens Features  end */}

            {/* Bestselling Eyeglasses Shapes */}

            <Grid container sx={{ mb:'20px' ,}}>
                <Grid item xs={12} sx={{p:'0px 20px'}}>
                <Typography sx={{ textAlign:'center',fontWeight:'bold',fontSize: {lg:'25px', md:'22px', sm:'20px', xs:'18px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color:'#424242' }}>Bestselling Eyeglasses Shapes</Typography>
                <Typography sx={{ fontSize:{lg:'15px', md:'14px', sm:'13px',xs:'13px'}, color:'grey', fontFamily:'sans-serif', textAlign: 'center' }}>Set new trends around with these eyemazing Eyeglasses Shapes!</Typography>
                </Grid>
                <Grid container sx={{p:{lg:'10px 50px'}, justifyContent:'center', alignItems:'center', mt:'15px' }}>
                    {
                            glasses.map((e)=>{
                                return (
                                    <Grid item lg={4} md={4} sm={5} xs={7} sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',mb:'5px',transition:'1s','&:hover':{transform:'scale(1.1)'} }}>
                                         <Box sx={{ height:{lg: '170px',md:'150px', sm:'150px', xs:'130px'}, width:{lg: '290px', md:'250px', sm:'250px', xs:'230px'},  }}>

                                        <img src={e.image} alt="" style={{ width:'100%',height:'100%' }} />
                                            </Box>
                                        <Typography sx={{ fontSize:'16px',fontWeight:'bold' }} >{e.name}</Typography>
                                        <Typography sx={{ fontSize:'14px',color:'#e5703c' }}>{e.desc}</Typography>
                                    </Grid>
                                );
                            })
                        }
                </Grid>
            </Grid>
            {/* Bestselling Eyeglasses Shapes end */}

            {/* offer container */}
            <Grid container sx={{ p:'0px 50px',bgcolor:'#F5F5F5',display:'flex',justifyContent:'space-around',alignItems:'center',p:{lg:'20px 150px',md:'15px 50px', sm:'10px 50px', xs:'10px 20px'},}}>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE',width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }} >
                        <img src={offer1} alt="offer1" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }}>
                        <img src={offer2} alt="offer2" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={3} sx={{m:'5px'}}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:{lg:'270px',md:'250px', sm:'250px', xs:'220px'},height:{lg:'200px',md:'150px', sm:'150px', xs:'150px'},p:'20px',transition:'1s','&:hover':{transform:'rotate(5deg)'} }}>
                        <img src={offer3} alt="offer3" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
            </Grid>
            {/* offer container end */}

            {/* Faq section */}
            <Grid container sx={{ p: '0px 10px' }}>
                <Grid item xs={12} sx={{ p: '10px' }}>
                    <Typography sx={{fontFamily:'sans-serif'}}>FAQ</Typography>
                    <Box sx={{ bgcolor: '#F5F5F5', p: '10px' }}>
                        <Accordion sx={{ mb: '5px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Is Eyemyeye a legit website?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, it is! We have over 4,00,00 customers and are working towards catering to many more. <br />
                                We have 4.1 rating based on 6k reviews on Play store. <br />
                                We are available on the Google Play store and Apple App store. <br />
                                Try us out once and see the difference.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mb: '5px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                When can I expect my order?
                            </AccordionSummary>
                            <AccordionDetails>
                                While we generally take 2-4 working days to deliver your order once it is generated, the location from where you ordered does affect delivery times. To understand our delivery terms and conditions do check out this page.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mb: '5px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How do I contact customer support?
                            </AccordionSummary>
                            <AccordionDetails>
                                We are always here to help you! You can get it touch with us either through emailsupport@eyemyeye.com or call us at 08069051111.
                                For more information, please visit our contact us page here: https://www.eyemyeye.com/contact-us/
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
            </Grid>
            {/* faq section end */}
            {/* <Grid container sx={{ bgcolor: '#F5F5F5', padding: '20px 100px', display: 'flex', justifyContent: 'center', border:'1px solid red', overflowX:'scroll' }}>
                <Grid item lg={2} md={2} sm={2} xs={2}  sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/mobile/mobile-site-content/icons/ftr_made_in_india.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 100% Made in <br /> INDIA</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_best_quality.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > HIGH QUALITY <br /> PRODUCTS</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_faster_delivery.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > FAST TRACK <br /> DELIVERY</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/mobile/mobile-site-content/icons/ftr_made_in_india.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 7-Day Easy <br /> Returns</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_secure_payment.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 100% Secure <br /> Payment</Typography>
                </Grid>
            </Grid> */}
            <Footer />
        </>
    )
}

export default Accordiancmp