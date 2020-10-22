import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className="header">
        
                <img 
                    className="header__icon" 
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="air bnb logo"
                />

                <div className="header__center">
                    <input type="text"/>
                    <SearchIcon />
                </div>

                <div className="header__right">
                    <Button>
                        <div className="nowrap">Become a host</div>
                    </Button>
                    <Button >
                        <LanguageIcon />
                        <ExpandMoreIcon />
                    </Button>
                    <Avatar />

                </div>
        </div>
    )
}

export default Header
