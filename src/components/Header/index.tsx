import { PATH_NAME_PORTFOLIO } from 'constants/constants';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="app-header">
            <Link to={PATH_NAME_PORTFOLIO}><h2 className="app-title">Matthew Lewis <span className="header-title-alt-colour">game Developer</span></h2></Link>
        </header>
    );
}