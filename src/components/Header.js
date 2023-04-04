import React from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" height="200px" />
    </div>
  );
};

export default Header;
