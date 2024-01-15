import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import App_store from '../assets/apple-app-store.svg';


const Footer = () => {
    const date = new Date().getFullYear();
   

    const explorelinks = ['Explore Nearby','Blink Membership','Deals & Offers','Contact Lenses','Color Blind Glasses','Eye Test Camp','Home Eye Test'];
    const tipsguides = ['Knowledge Center','Frames & Face Shapes','How To Read A Prescription','AMD Test','Astigmatism Test','Near Vision Test','Size & Fit Guide'];
    const eyemyeye = ['About Us','Contact Us','Careers','Blog','Sitemap','Cancellation & Refund Policy','Terms Of Use','Terms & Conditions For Tele Consultation','Privacy Policy','Delivery & Shipping Terms'];

  return (
    <>
    <Grid container sx={{ bgcolor:'#333232', p:'20px 50px'}}>
        <Grid item lg={3} md={6} sm={3} >
            <Typography variant='p' sx={{ color:'white',fontWeight:'bold' }}>LET’S GET SOCIAL</Typography>
            <Box sx={{ display:'flex',marginBottom:'15px' }}>
                <FacebookIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <TwitterIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <InstagramIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <YouTubeIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
            </Box>
            <Box sx={{mt:''}}>
            <Typography variant='p' sx={{color:'white',fontWeight:'bold' }}>CONNECT WITH US:</Typography><br />
            <Typography  sx={{color:'white'}}>08069051111</Typography><br />
            <Typography variant='p' sx={{color:'white'}}>info@nelly.com</Typography><br />
            <Typography variant='p' sx={{color:'white'}}>All Emails Will Be Answered Within 24 Hours</Typography><br />
            <Typography variant='p' sx={{color:'white'}}>We're available at</Typography>
            <Grid container sx={{ display:'flex' }}>
                <Grid item sx={{marginRight:'10px'}}>
                    <Box sx={{width:'100px',height:'50px'}}>
                    <img src='https://cdn.eyemyeye.com/mobile/images/static-page/lensometer/apple-app-store.svg' alt="bug"  style={{height:'100%',width:'100%', }} />
                    </Box> 
                </Grid>
                <Grid item >
                    <Box sx={{width:'100px',height:'50px'}}>
                    <img src='https://cdn.eyemyeye.com/shared/images/logo/google_store.svg' alt="bug"  style={{height:'100%',width:'100%', }} />
                    </Box> 
                </Grid>
            </Grid>
            </Box>
        </Grid>

        <Grid item lg={3} md={6} sm={3} >
            <Typography variant='p' sx={{ color:'white',fontWeight:'bold' }}>EXPLORE</Typography>
            <Box sx={{marginTop:'20px'}}>
                {
                    explorelinks.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer','&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
            </Box>
            
        </Grid>

        <Grid item lg={3} md={6} sm={3} >
            <Typography variant='p' sx={{ color:'white',fontWeight:'bold' }}>TIPS & GUIDES</Typography>
            <Box sx={{marginTop:'20px'}}>
                {
                    tipsguides.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer','&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
                
            </Box>
            
        </Grid>

        <Grid item lg={3} md={6} sm={3} >
            <Typography variant='p' sx={{ color:'white',fontWeight:'bold' }}>EYEMYEYE</Typography>
            <Box sx={{marginTop:'20px'}}>
            {
                    eyemyeye.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer','&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
            </Box>
        </Grid>

        <hr style={{width:'100%',marginTop:'20px',color:'red'}} />
        <Grid xs={12}>
        <Typography sx={{ color:'white',textAlign:'center' }}>Copyright © {date}. All Rights Reserved</Typography>
        </Grid>
    </Grid>
    </>
  )
}

export default Footer