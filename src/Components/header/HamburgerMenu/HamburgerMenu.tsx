import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Filter from "../CategoryFilter/Filter";
import {useNavigate, useLocation} from "react-router-dom";
import TextField from "@mui/material/TextField";

export default function HamburgerMenu() {
    const location = useLocation();
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (pageURL) => {
        history(pageURL);
        setAnchorEl(null);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{
                    mr: 2,
                    '&:focus': { outline: "unset" }
                }}
                onClick={handleMenuOpen}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="hamburger-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {location.pathname === "/customized-news" ? (
                    <MenuItem onClick={() => handleMenuClick("/")}>
                        All News Page
                    </MenuItem>
                ) : (
                    <MenuItem onClick={() => handleMenuClick("/customized-news")}>
                        Customized News Page
                    </MenuItem>
                )}
                {/* Render the Filter component as a menu item only on mobile devices */}
                <MenuItem sx={{display: {xs: "block", sm: "none"}}}>
                    <Filter/>
                </MenuItem>
            </Menu>
        </>
    );
}
