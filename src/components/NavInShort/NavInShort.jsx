import React from 'react';
import './NavInShort.css';

import SideMenu from '../SideMenu/SideMenu';
import { navLogo } from '../../constant/data';

const NavInShort = ({ setCategory }) => {
  return (
    <nav className="nav__container">
      <div className="nav__icon">
        <SideMenu setCategory={setCategory} />
      </div>

      <img src={navLogo} alt="logo" className="nav__logo" />
    </nav>
  );
};

export default NavInShort;

// src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
