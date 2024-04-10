import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";
import BasicDateRangePicker from "./DatePicker"


const Header = () => {
return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <HamburgerMenu />
                <Box sx={{ flexGrow: 1 }} />
                <SearchBox />
                <BasicDateRangePicker />
                {/*<Filter />*/}
            </Toolbar>
        </AppBar>
    </Box>
)
};
export default Header;
