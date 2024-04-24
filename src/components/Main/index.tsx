import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';
import { PATH_NAME_PORTFOLIO, PAGE_TITLE_PORTFOLIO } from 'constants/constants';

export default function Main() {
    const globalContextData = useContext(GlobalContext);
    const outlet = useOutlet();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0 });

        // default path
        if(location.pathname === '/') navigate(PATH_NAME_PORTFOLIO);

        // Update main page titles here based on the pathname to guarentee they will change.
        if(location.pathname === PATH_NAME_PORTFOLIO && globalContextData.pageTitle !== PAGE_TITLE_PORTFOLIO) {
            globalContextData.updateState({pageTitle: PAGE_TITLE_PORTFOLIO});
        }
    }, [location.pathname]);

    return(
        <main className="app-main">
            <div className="app-section-title-container">
                <h1 className="app-section-title">{globalContextData.pageTitle}</h1>
                {outlet}
            </div>
        </main>
    );
}