import React, { useContext, useEffect, useState } from 'react';
import { PAGE_TITLE_PORTFOLIO, PATH_NAME_PORTFOLIO } from 'constants/constants';

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import GlobalContext, { GlobalContext_t } from 'context/GlobalContext';

export default function () {

    const [state, setState] = useState({});

    const updateState = (newState: Partial<GlobalContext_t>) => {
        setState({ ...state, ...newState });
    };

    return (
        <div className="app-container">
            <Header/>
            <GlobalContext.Provider value={{...state, updateState}}>
                <Main />
            </GlobalContext.Provider>
            <Footer/>
        </div>
    )
};