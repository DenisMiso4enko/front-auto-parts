import React from "react";
import { NavLink } from "react-router-dom";
import { dataMenu } from "./data-menu";
import "../../../scss/components/_navMenuUser.scss";

export const NavMenuUser = () => {
  return (
    <nav className="navmenu">
      <ul className="navmenu__list">
      {dataMenu.map(({title, nav}, index) => (
        <li key={index} className="navmenu__item">
          <NavLink to={nav}>{title}</NavLink>
        </li>
      ))}
      </ul>
    </nav>
  );
};
