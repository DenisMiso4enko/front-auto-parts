import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { dataMenu } from "./data-menu";

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
