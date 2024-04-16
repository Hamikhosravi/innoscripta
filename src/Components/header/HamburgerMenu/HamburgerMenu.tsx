import React, { useState, memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { useNavigate, useLocation } from "react-router-dom";
import SourceFilter from "../SourceFilter/SourceFilter";

const HamburgerMenu = memo(() => {
    const location = useLocation();
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isFilterSelected, setIsFilterSelected] = useState(false); // State to track filter selection

    const handleMenuClick = (pageURL) => {
        history(pageURL);
        setAnchorEl(null);
    };

    const handleFilterChange = () => {
        setIsFilterSelected(true); // Set category selection state to true
        handleClose(); // Close the menu
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsFilterSelected(false); // Reset category selection state
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
                <MenuIcon />
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
                {/* Render the CategoryFilter component as a menu item only on mobile devices */}
                <MenuItem sx={{ display: { xs: "block", sm: "none" } }} onClick={handleFilterChange}>
                    <CategoryFilter />
                </MenuItem>
                {/* Render the SourceFilter component as a menu item only on mobile devices */}
                <MenuItem sx={{ display: { xs: "block", md: "none" } }} onClick={handleFilterChange}>
                    <SourceFilter />
                </MenuItem>
            </Menu>
        </>
    );
});

export default HamburgerMenu;
