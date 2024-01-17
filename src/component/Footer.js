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
    const eyemyeye = ['About Us','Contact Us','Careers','Blog','Sitemap','Cancellation & Refund Policy','Terms Of Use','Privacy Policy','Delivery & Shipping Terms'];

  return (
    <>
    <Grid container sx={{ bgcolor:'#333232', p:'20px 30px'}}>
        <Grid item lg={3} md={4} sm={6} xs={12} sx={{m:{xs:'3px 0px'}}}>
            <Typography  sx={{ color:'white',fontWeight:'bold',fontSize:'14px' }}>LET’S GET SOCIAL</Typography>
            <Box sx={{ display:'flex', }}>
                <FacebookIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <TwitterIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <InstagramIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
                <YouTubeIcon sx={{color:'white',fontSize:'35px',marginRight:'5px'}}/>
            </Box>
            <Box sx={{mt:'10px'}}>
            <Typography  sx={{color:'white',fontWeight:'bold',fontSize:'14px'  }}>CONNECT WITH US:</Typography>
            <Typography  sx={{color:'white',fontSize:'14px' }}>08069051111</Typography><br />
            <Typography  sx={{color:'white',fontSize:'14px'}}>info@nelly.com</Typography>
            <Typography  sx={{color:'white',fontSize:'14px'}}>All Emails Will Be Answered Within 24 Hours</Typography>
            <Typography sx={{color:'white',fontSize:'14px'}}>We're available at</Typography>
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

        <Grid item  lg={3} md={4} sm={6} xs={12} sx={{display:'flex', justifyContent:'left', alignItems:'flex-start',m:{xs:'5px 0px'} }}>
            <Box >
            <Typography sx={{ color:'white',fontWeight:'bold',fontSize:'14px', mb:'10px'  }}>EXPLORE</Typography>
                {
                    explorelinks.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer',fontSize:'14px' ,'&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
            </Box>
            
        </Grid>

        <Grid item  lg={3} md={4} sm={6} xs={12} sx={{display:'flex', justifyContent:'left', alignItems:'flex-start',m:{xs:'5px 0px'}}}>
            <Box >
                <Typography sx={{ color:'white',fontWeight:'bold' , mb:'10px'}}>TIPS & GUIDES</Typography>
                {
                    tipsguides.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer',fontSize:'14px' ,'&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
                
            </Box>
            
        </Grid>

        <Grid item  lg={3} md={4} sm={6} xs={12}  sx={{display:'flex', justifyContent:'left', alignItems:'center',m:{xs:'5px 0px'} }}>
            <Box >
            <Typography sx={{ color:'white',fontWeight:'bold',fontSize:'14px', mb:'10px' ,  }}>EYEMYEYE</Typography>
            {
                    eyemyeye.map((e)=>{
                        return(
                            <Typography sx={{color:'white',cursor:'pointer',fontSize:'14px','&:hover':{ml:'2px', color:'grey'}}}>{e}</Typography>
                        );
                    })
                }
            </Box>
        </Grid>

        {/* <hr style={{width:'100%',marginTop:'20px',color:'grey'}} /> */}
        <Grid xs={12} sx={{ display:'flex', justifyContent:'center',alignItems:'center', borderTop:'1px solid grey', p:'10px',mt:'5px'}}>
        <Typography sx={{ color:'white',textAlign:'center', fontSize:{lg:'15px', md:'14px', sm:'13px', xs:'12px'} }}>Copyright © {date}. All Rights Reserved</Typography>
        </Grid>
    </Grid>
    </>
  )
}

export default Footer