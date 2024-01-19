import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Box, Drawer, Grid, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import '../Homepage.css'

const SideDrawer = ({ open, setOpen }) => {
    const closeHandler = () => {
        setOpen(false)
    }


    return (
        <Drawer

            anchor={'left'}
            open={open}
            onClose={() => { setOpen(false) }}
            PaperProps={{
                sx: { width: { lg: '27%', md: '38%', sm: '45%', xs: '70%' }, zIndex: 999, margin: 'auto', bgcolor: 'white', borderRadius: '0px 6px 6px 0px' }
            }}
        >
            <Grid container className='removeScroll'>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', p: '4px', position: 'sticky', top: '0px', zIndex: '99', bgcolor: 'white'}}>
                    <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: {lg:'225px', md:'200px', sm:'180px', xs:'150px'}, height: {lg:'43px', md:'40px', sm:'35px', xs:'30px'}, ml: '14px' }}>
                            <img src={logo} alt='logo' style={{ width: '100%', height: '100%',  }} />
                        </Box>
                    </Grid>
                    <Grid item xs={2} sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>

                        <CancelOutlinedIcon sx={{ color: '#424242', fontSize: {lg:'40px', md:'35px', sm:'30px', xs:'27px'}, cursor: 'pointer' }} onClick={closeHandler} />

                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', mt: '8px' }}>
                    <Typography sx={{ fontSize: {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>SALE</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize: {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>NEW IN</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>TOP LIST</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px', }}>CLOTHES</Typography>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: '#424242' }} />
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>SHOES</Typography>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: '#424242' }} />
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>ACCESSORIES</Typography>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: '#424242' }} />
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>SPORTS</Typography>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: '#424242' }} />
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>INTIMATE</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>BRANDS</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>NELLYBYBELLY</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px' }}>
                    <Typography sx={{ fontSize: {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>OUTLET</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', bgcolor: '#e8eaf6', display: 'flex', alignItems: 'center' }}>
                    <PersonOutlineOutlinedIcon sx={{ fontSize: '25px', ml: '10px' }} />
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>LOGIN</Typography>
                </Grid>
                <Grid item xs={12} sx={{ borderTop: '1px solid lightgrey', p: '13px', bgcolor: '#e8eaf6', display: 'flex', alignItems: 'center' }}>
                    <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '25px', ml: '10px', }} />
                    <Typography sx={{ fontSize:  {lg:'15px', md:'14px', sm:'14px', xs:'14px'}, ml: '15px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>CUSTOMER SERVICE</Typography>
                </Grid>




                {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '15px' }}>
                    <Box sx={{ borderRadius: '3px', p: '7px 0px 7px 5px', width: { lg: '95%', md: '95%', sm: '95%', xs: '95%' }, bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <input placeholder='Type here...' type='text' style={{ border: 'none', background: 'none', outline: 'none', fontWeight: '600', width: '90%' }} />
                        <SearchIcon sx={{ color: 'grey' }} />

                    </Box>

                </Grid> */}
                {/* <Grid item xs={12} sx={{ p: '7px', mt: '15px' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Grid item xs={6} sx={{ borderBottom: change == 'menu' ? '2px solid white' : '2px solid grey' }} onClick={() => { changeHandler('menu') }}>
                            <Typography sx={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: '800', }} >MENU</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ borderBottom: change == 'categories' ? '2px solid white' : '2px solid grey' }} onClick={() => { changeHandler('categories') }}>
                            <Typography sx={{ color: 'grey', fontSize: '14px', textAlign: 'center', fontWeight: '800', }} >CATEGORIES</Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        {change == 'menu' ?
                            <Grid item xs={12} sx={{ textAlign: 'left', }}>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>All CATEGORIES</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>CLOTHES</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>SHOP</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>CONTACT US</Typography>

                            </Grid>
                            :
                            <Grid item xs={12} sx={{ lineHeight: '10px', textAlign: 'left', }}>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>COUPLE SHIRTS</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>FORMAL SHIRTS</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MAN'S FULL SLEEVE</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MAN'S HALF SLEEVE</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MEN'S/WOMEN'S</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MEN T-SHIRT</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>WOMEN'S FULL SLEEVE</Typography>
                                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>WOMEN'S HALF SLEEVE</Typography>

                            </Grid>



                        }


                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

                            <PersonOutlineOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
                            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight: '700', }}>LOGIN/SIGNUP</Typography>


                        </Grid>

                        <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

                            <FavoriteBorderOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
                            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight: '700', }}>WHISHLIST</Typography>

                        </Grid>
                    </Grid>

                </Grid> */}


            </Grid>


        </Drawer>
    )
}

export default SideDrawer