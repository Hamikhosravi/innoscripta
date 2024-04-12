import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {useNavigate, useLocation} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

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
                color="inherit"
                aria-label="open drawer"
                sx={{mr: 2}}
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
            </Menu>
        </>
    );
}
