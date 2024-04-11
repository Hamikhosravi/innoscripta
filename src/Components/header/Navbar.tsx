import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";
import DateRangePickerWithIcon from "./DatePicker"
import Filter from "./Filter";


const Header = () => {
return (
    <Box sx={{ flexGrow: 1, position:'fixed', width: '100%', top:"0", left:"0" }} >
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: "lightBlue"}}>
                <HamburgerMenu />
                <Box sx={{ flexGrow: 1 }} />
                <DateRangePickerWithIcon />
                <SearchBox />
                <Filter />
            </Toolbar>
        </AppBar>
    </Box>
)
};
export default Header;
