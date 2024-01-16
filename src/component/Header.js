import { Box, Button, Grid, InputBase, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import logo from '../assets/logo.png';
import React from 'react'

const Header = () => {
    return (
        <>
            <Grid container sx={{ position: 'sticky', top: '0px', zIndex: '99999', bgcolor: 'white' }}>

                <Grid container sx={{ display:{lg:'flex', md:'flex', sm:'none', xs:'none'}, bgcolor: "#212121", justifyContent: "left", p: '6px' }}>
                    <Grid item lg={3} md={4}sm={4} xs={4} sx={{ justifyContent: "left", alignItems: "flex-start", }}>
                        <Typography sx={{ fontSize: {lg:"13px", md:'12px', sm:'11px', xs:'10px'}, color: "white", textAlign: {lg:'center', md:'center', sm:'left',xs:'left'}, fontFamily: 'sans-serif', mt: '5px' }}>CUSTOMER SERVICE</Typography>
                    </Grid>

                    <Grid item lg={5.6} md={6} sm={7} xs={8} sx={{ display: 'flex', justifyContent: {lg:'center', md:'center', sm:'left',xs:'left'}, alignItems: 'center' }}>

                        <Typography sx={{ fontSize:{ lg:"13px", md:'12px',sm:'11px', xs:'10px'}, color: "white", textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold' }}>NEW IN: SUIT PANTS FROM 29,95 € - </Typography>
                        <Button sx={{ p: '3px 8px', color: 'white', bgcolor: '#9e9e9e', ml: '5px', fontSize:{lg:'14px', md:'14px',sm:'12px',xs:'11px'}, '&:hover': { bgcolor: 'grey' } }}>shop now</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: '3px', pl: '3px', pr: '3px' }}>
                    <Grid item lg={3} md={3} sm={5} xs={6} sx={{ p: '10px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <MenuOutlinedIcon sx={{ fontSize: {lg: '36px' , md: '30px', sm: '26px', xs: '24px', }, color: "#212121" }} />
                        <Box sx={{width:{lg:'200px', md:'190px', sm:'190px', xs:'178px'},height:{lg:'40px', md:'38px', sm:'33px', xs:'27px'}}}>
                            <img src={logo} alt='logo' style={{width:'100%', height:'100%'}}/>
                            {/* <Typography sx={{ fontSize: {lg:'30px', md:'28px', sm:'25px', xs:'22px'}, fontFamily: 'sans-serif', ml: '10px' }}>NELLY.COM</Typography> */}
                        </Box>
                    </Grid>
                    <Grid item xs={3.1} sx={{ p: '10px', display:{lg:'block', md:'block', sm:'none', xs:'none' }}}>
                        <Box sx={{ width: '100%', height: '30px', bgcolor: '#eeeeee', p: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '3px' }}>
                            <InputBase placeholder='Search for product, name, brands, and more' sx={{ fontSize: '13px', color: '#212121', width: '90%' }} />
                            <SearchIcon sx={{ color: 'grey' }} />
                        </Box>

                    </Grid>
                    <Grid item xs={4} sx={{ p: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <PersonOutlineOutlinedIcon sx={{ fontSize: {lg:'30px', md:'27px', sm:'27px', xs:'26px'} }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold',display:{lg:'block', md:'block', sm:'none', xs:'none'} }}>Log In</Typography>
                        </Box>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <FavoriteBorderOutlinedIcon sx={{fontSize: {lg:'30px', md:'27px', sm:'27px', xs:'26px'}  }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold',display:{lg:'block', md:'block', sm:'none', xs:'none'}  }}>Favorite</Typography>
                        </Box>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <ShoppingBagOutlinedIcon sx={{fontSize: {lg:'30px', md:'27px', sm:'27px', xs:'26px'} }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold', textAlign: 'center',display:{lg:'block', md:'block', sm:'none', xs:'none'}  }}>Shopping Cart</Typography>
                        </Box>

                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center', p:{ lg:'7px 0px', md:'7px 0px', sm:'5px 0px 10px 0px', xs:'5px 0px 10px 0px'} }}>
                    <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'left', alignItems: 'center' }}>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '60px', md: '55px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>SALE</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '60px', md: '55px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>NEW IN</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '80px', sm: '74px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>TOP LIST</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '110px', sm: '100px' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>CLOTHES</Typography>
                            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: { lg: '25px', md: '20px' } }} />

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '100px', sm: '90px' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>SHOES</Typography>
                            <KeyboardArrowDownOutlinedIcon />

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '170px', md: '140px' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>ACCESSORIES</Typography>
                            <KeyboardArrowDownOutlinedIcon />

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '110px', md: '90px' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>SPOTRS</Typography>
                            <KeyboardArrowDownOutlinedIcon />

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '120px', md: '100px' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>INTIMATE</Typography>
                            <KeyboardArrowDownOutlinedIcon />

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '80px', md: '70px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>BRANDS</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '120px', md: '100px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>NELLYBYBELLY</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: { lg: '100px', md: '80px' } }}>
                            <Typography sx={{ fontSize: { lg: '14px', sm: '12px' }, textAlign: 'center', '&:hover': { fontWeight: 'bold', textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)' } }}>OUTLET</Typography>

                        </Box>

                    </Grid>
                    <Grid item xs={12} sx={{display:{lg:'none', md:'none', sm:'flex', xs:'flex'},p:'0px 10px'}}>
                        <Box sx={{ width: '100%', height: '30px', bgcolor: '#eeeeee', p: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '3px' }}>
                            <InputBase placeholder='Search for product, name, brands, and more' sx={{ fontSize: '13px', color: '#212121', width: '90%' }} />
                            <SearchIcon sx={{ color: 'grey' }} />
                        </Box>
                    </Grid>

                </Grid>


                {/* <AppBar position="static">
                    <Toolbar>

                    </Toolbar>
                </AppBar> */}
            </Grid>

        </>
    )
}

export default Header