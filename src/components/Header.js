import React from 'react';
import '../styles/header.scss'

const Header = () => {
    return (
        <div className='header-grid-area'>
            <h1 className='firstname-text'><em>Brendan</em></h1>
            <h3 className='lastname-text'>Lamishaw</h3>
        </div>
    );
};

export default Header;