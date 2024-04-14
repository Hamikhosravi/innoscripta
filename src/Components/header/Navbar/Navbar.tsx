import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SearchBox from "../SearchBox/SearchBox";
import DateRangePickerWithIcon from "../DatePicker/DatePicker"
import Filter from "../CategoryFilter/Filter";
import "./Navbar.css"
import {useLocation} from "react-router-dom";
import React, {memo} from "react";


const Header = memo(() => {
    const location = useLocation();
    const showDatePicker = location.pathname !== "/customized-news"; // Check if location is not "/customized-news"

    return (
        <Box sx={{
            flexGrow: 1,
            position: 'fixed',
            width: '100%',
            top: "0",
            left: "50%",
            maxWidth: "1200px",
            transform: "translate(-50%)"
        }}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: "lightBlue", pt: 1}}>
                    <HamburgerMenu/>
                    <Box sx={{flexGrow: 1}}/>
                    {showDatePicker && <DateRangePickerWithIcon/>}
                    <SearchBox/>
                    <Filter className="filter"/>
                </Toolbar>
            </AppBar>
        </Box>
    )
});
export default Header;
