import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import {Link} from 'react-router-dom'

export default function HamburgerMenu() {
    return (
        <>
            <Link to="customized-news">check</Link>
            <Link to="">root</Link>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{mr: 2}}
            >

                <MenuIcon/>
            </IconButton>
        </>
    )
}
