import { PAGE_TITLE_PORTFOLIO, PATH_NAME_PORTFOLIO } from 'constants/constants';
import AppContext from 'context/AppContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    const { pageTitle } = useContext(AppContext);

    return(
        <header className={`app-header ${pageTitle !== PAGE_TITLE_PORTFOLIO ? 'content-page-header' : ''}`}>
            {
                pageTitle !== PAGE_TITLE_PORTFOLIO && 
                    <>
                        <Link to={PATH_NAME_PORTFOLIO}>
                            <div className="app-nav-back"><span className="material-symbols-outlined">arrow_back</span></div>
                        </Link>
                    </>
            }
            <h2 className="app-title">Matthew Lewis <span className="header-title-alt-colour">game Developer</span></h2>
        </header>
    );
}