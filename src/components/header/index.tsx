import React from "react";
import { ReactComponent as IconLogo } from "../../assets/svg/logo.svg";

import { ReactComponent as IconProfile } from "../../assets/svg/profile.svg";

import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <IconLogo className="logo" />
      </div>
      <div className="user-info">
        <p className="name">Diogo Simão</p>
        <IconProfile className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
