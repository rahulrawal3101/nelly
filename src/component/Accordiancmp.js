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



const Accordiancmp = () => {
    return (
        <>
            {/* <Header/> */}
            {/* <Grid container sx={{ marginTop:'50px' }}>

    </Grid> */}
            {/* offer container */}
            <Grid container sx={{ p:'0px 50px',bgcolor:'#F5F5F5',display:'flex',justifyContent:'center',alignItems:'center',p:{lg:'20px 260px'} }}>
                <Grid item lg={4}>
                    <Box sx={{ bgcolor:'#E7F8FE',width:'250px',height:'200px',p:'20px',transition:'transform 0.2s','&:hover':{transform:'rotate(5deg)scale(1.1)'} }} >
                        <img src={offer1} alt="offer1" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={4}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:'250px',height:'200px',p:'20px',transition:'transform 0.2s','&:hover':{transform:'rotate(5deg)scale(1.1)'} }}>
                        <img src={offer2} alt="offer2" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={4}>
                    <Box sx={{ bgcolor:'#E7F8FE', width:'250px',height:'200px',p:'20px',transition:'transform 0.2s','&:hover':{transform:'rotate(5deg)scale(1.1)'} }}>
                        <img src={offer3} alt="offer3" style={{ width:'100%',height:'100%' }} />
                    </Box>
                </Grid>
            </Grid>
            {/* offer container end */}

            {/* Faq section */}
            <Grid container sx={{ p: '0px 50px' }}>
                <Grid item lg={12} sx={{ p: '20px' }}>
                    <Typography>FAQ</Typography>
                    <Box sx={{ bgcolor: '#F5F5F5', p: '20px' }}>
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
            <Grid container sx={{ bgcolor: '#F5F5F5', padding: '20px 100px', display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={2} sm={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/mobile/mobile-site-content/icons/ftr_made_in_india.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 100% Made in <br /> INDIA</Typography>
                </Grid>
                <Grid item lg={2} sm={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_best_quality.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > HIGH QUALITY <br /> PRODUCTS</Typography>
                </Grid>
                <Grid item lg={2} sm={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_faster_delivery.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > FAST TRACK <br /> DELIVERY</Typography>
                </Grid>
                <Grid item lg={2} sm={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/mobile/mobile-site-content/icons/ftr_made_in_india.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 7-Day Easy <br /> Returns</Typography>
                </Grid>
                <Grid item lg={2} sm={2} sx={{ display: 'flex' }}>
                    <img src="https://cdn.eyemyeye.com/desktop/images/icon/ftr_secure_payment.svg" alt="" width="50px" style={{ marginRight: '15px' }} />
                    <Typography > 100% Secure <br /> Payment</Typography>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Accordiancmp