import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/section/logo.svg';
import NavBtn from '../../assets/img/section/header_menu_off.svg';
import Nav from './Nav';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className='header'>
            <header>
                <Link to='/' className="logo" >
                    <img src={LOGO} alt="로고" />
                </Link>
                <button className="navbtn" onClick={toggleNav}>
                    <img src={NavBtn} alt="nav" />
                </button>
            </header>
            {isNavOpen && (
                <div className="nav">
                    <Nav />
                </div>
            )}
        </div>
    );
};

export default Header;
