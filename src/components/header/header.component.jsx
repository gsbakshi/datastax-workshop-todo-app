import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome-black.svg';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Logo className='logo' />
        </div>
    </div>
);

export default Header;
