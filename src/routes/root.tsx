import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PAGE_TITLE_PORTFOLIO, PATH_NAME_PORTFOLIO } from 'constants/constants';

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import AppContext, { AppContext_t } from 'context/AppContext';

export default function () {

    const [state, setState] = useState({});

    const updateState = useCallback((newState: Partial<AppContext_t>) => {
        setState({ ...state, ...newState });
    }, [state, setState]);

    const getContextValue = useCallback(() => ({ updateState, ...state }), [state, updateState]);

    return (
        <AppContext.Provider value={getContextValue()}>
            <div className="app-container">
                <Header/>
                <Main />
                <Footer/>
            </div>
        </AppContext.Provider>
    )
};