import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="app-header">
            <Link to="/"><h1>MattouBatou</h1></Link>
        </header>
    );
}