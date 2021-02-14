import React from 'react'
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

/* Three ICON in row in Header*/

function Header() {
    return (
        <div className="header">
            {/* IconButton */}
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            {/* Image Logo Section here*/}
            <img
                className="header__logo"
                src={process.env.PUBLIC_URL+"/tinder-logo.png"}
                alt="Brand Name logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
