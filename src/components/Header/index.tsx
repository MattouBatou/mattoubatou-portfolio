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
                        <Link className="app-nav-back-container" to={PATH_NAME_PORTFOLIO}>
                            <div className="app-nav-back"><span className="material-symbols-outlined">arrow_back</span></div>
                        </Link>
                    </>
            }
            <h2 className="app-title">Matt Lewis <span className="header-title-alt-colour">Games</span></h2>
            <div className="icon-link-container">
                <a className="icon-link icon-link-cv" href="https://mattoubatou.com/assets/MattLewis_GameDev_CV_2024.pdf" target="_blank"></a>
                <a className="icon-link icon-link-github" href="https://github.com/MattouBatou" target="_blank"></a>
                <a className="icon-link icon-link-linkedin" href="https://www.linkedin.com/in/matthew-edward-lewis/" target="_blank"></a>
            </div>
        </header>
    );
}