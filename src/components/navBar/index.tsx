import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Contract } from "../../assets/svg/contractsSidemenuIcon.svg";
import { ReactComponent as Parts } from "../../assets/svg/part.svg";
import { ReactComponent as Associate } from "../../assets/svg/associate.svg";

import "./navBar.scss";

const SideBarData = [
  {
    title: "Contratos",
    path: "/contracts",
    icon: <Contract />,
  },
  {
    title: "Contratos",
    path: "/search/contracts",
    icon: <Contract />,
  },
  {
    title: "Parts",
    path: "/parts",
    icon: <Parts />,
  },
  {
    title: "Search",
    path: "/search/parts",
    icon: <Parts />,
  },
  {
    title: "Associate",
    path: "/associate",
    icon: <Associate />,
  },
];

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {SideBarData.map((item) => {
          return (
            <div
              key={item.path}
              title={item.title}
              className="navlink-container"
            >
              <NavLink to={item.path} activeClassName="navbar-list-item-active">
                <i className="navbar-list-item">
                  <span>{item.icon}</span>
                </i>
              </NavLink>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
