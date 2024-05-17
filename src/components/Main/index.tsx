import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import AppContext from 'context/AppContext';
import { PATH_NAME_PORTFOLIO, PAGE_TITLE_PORTFOLIO } from 'constants/constants';
import ProjectContentImage from 'components/Project/ProjectContentImage';

export default function Main() {
    const globalContext = useContext(AppContext);
    const outlet = useOutlet();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0 });

        // default path
        if(location.pathname === '/') navigate(PATH_NAME_PORTFOLIO);

        // Update main page titles here based on the pathname to guarentee they will change.
        if(location.pathname === PATH_NAME_PORTFOLIO && globalContext.pageTitle !== PAGE_TITLE_PORTFOLIO) {
            globalContext.updateState({pageTitle: PAGE_TITLE_PORTFOLIO, projectThumbnail: null});
        }

    }, [location.pathname]);

    return(
        <main className="app-main">
            {(globalContext.pageTitle === PAGE_TITLE_PORTFOLIO) && 
                <div className='app-hello'>
                    <h3 className="app-hello-content">
                        {`Hello. I'm Matt, I make short and fun HTML5 games for eLearning and digital marketing. If you need a game developed and shipped quickly please `}<a href="mailto:mattoubatou@gmail.com" target="_blank">get in touch.</a>
                    </h3>
                </div>
            }
            <div className="app-section-title-container">
                {((globalContext.projectThumbnail && globalContext.projectThumbnail !== null) ? <div className={`app-section-title-project-thumbnail square`}><ProjectContentImage content={globalContext.projectThumbnail}/></div> : <></>)}
                <h1 className={`app-section-title ${(globalContext.projectThumbnail !== null) ? 'project-title' : ''}`}>{globalContext.pageTitle}</h1>
                {outlet}
            </div>
        </main>
    );
}