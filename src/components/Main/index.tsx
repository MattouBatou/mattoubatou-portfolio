import React from 'react';
import { useOutlet } from 'react-router-dom';
import Content from 'assets/data/content';
import ListProjects from 'components/Main/ListProjects';

export default function Main() {
    const outlet = useOutlet();

    return(
        <main className="app-main">
            {outlet || ListProjects(Content)}
        </main>
    );
}