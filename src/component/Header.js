import { Box, Button, Grid, InputBase,  Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import React from 'react'

const Header = () => {
    return (
        <>
            <Grid container >

                <Grid container sx={{ bgcolor: "#CBC6BC", justifyContent: "left", p: '6px' }}>
                    <Grid item lg={3} md={4} sx={{ justifyContent: "left", alignItems: "flex-start", }}>
                        <Typography sx={{ fontSize: "13px", color: "white", textAlign: 'center', fontFamily: 'sans-serif', mt: '5px' }}>CUSTOMER SERVICE</Typography>
                    </Grid>

                    <Grid item xs={5.6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Typography sx={{ fontSize: "13px", color: "white", textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold' }}>NEW IN: SUIT PANTS FROM 29,95 € - </Typography>
                        <Button sx={{ p: '3px 8px', color: 'white', bgcolor: '#9e9e9e', ml: '5px', '&:hover': { bgcolor: 'grey' } }}>shop now</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Grid item xs={3} sx={{ p: '10px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <MenuOutlinedIcon sx={{ fontSize: { xs: '30px', sm: '25px', md: '29px', lg: '36px' }, color: "#212121" }} />
                        <Box>
                            <Typography sx={{ fontSize: '30px', fontFamily: 'sans-serif', ml: '10px' }}>NELLY.COM</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3.1} sx={{ p: '10px' }}>
                        <Box sx={{ width: '100%', height: '30px', bgcolor: '#eeeeee', p: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '3px' }}>
                            <InputBase placeholder='Search for product, name, brands, and more' sx={{ fontSize: '13px', color: '#212121', width: '90%' }} />
                            <SearchIcon sx={{ color: 'grey' }} />
                        </Box>

                    </Grid>
                    <Grid item xs={4} sx={{ p: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <PersonOutlineOutlinedIcon sx={{ fontSize: '30px' }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold', }}>Log In</Typography>
                        </Box>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: '30px' }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>Favorite</Typography>
                        </Box>
                        <Box sx={{ ml: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <ShoppingBagOutlinedIcon sx={{ fontSize: '30px' }} />
                            <Typography sx={{ fontSize: '11px', fontWeight: 'bold', textAlign: 'center' }}>Shopping Cart</Typography>
                        </Box>

                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center',p:'7px 0px' }}>
                    <Grid item xs={11} sx={{ display:'flex', justifyContent:'left', alignItems:'center' }}>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '60px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>SALE</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '80px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>NEW IN</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '80px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>TOP LIST</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '110px', display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>CLOTHES</Typography>
                            <KeyboardArrowDownOutlinedIcon/>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '100px', display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>SHOES</Typography>
                            <KeyboardArrowDownOutlinedIcon/>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '170px', display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>ACCESSORIES</Typography>
                            <KeyboardArrowDownOutlinedIcon/>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '110px' , display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>SPOTRS</Typography>
                            <KeyboardArrowDownOutlinedIcon/>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '120px', display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>INTIMATE</Typography>
                            <KeyboardArrowDownOutlinedIcon/>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '80px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>BRANDS</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '120px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>NELLYBYBELLY</Typography>

                        </Box>
                        <Box sx={{ borderRight: '1px solid #e0e0e0', width: '100px' }}>
                            <Typography sx={{ fontSize: '14px',textAlign:'center', '&:hover':{fontWeight:'bold',textShadow: ' 3px 2px 8px rgba(26,180,0,0.6)'} }}>OUTLET</Typography>

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