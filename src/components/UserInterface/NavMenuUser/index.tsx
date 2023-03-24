import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

export const NavMenuUser = () => {
  return (
    <nav className="navmenu">
      <ul className="navmenu__list">
        <li className="navmenu__item">
          <NavLink to="/">Главная</NavLink>
        </li>
        <li className="navmenu__item">
          <NavLink to="/auto-parts">Запчасти</NavLink>
        </li>
        <li className="navmenu__item">
          <NavLink to="/guarantee">Гарантия</NavLink>
        </li>
        <li className="navmenu__item">
          <NavLink to="/delivery">Доставка</NavLink>
        </li>
        <li className="navmenu__item">
          <NavLink to="/about">О нас</NavLink>
        </li>
      </ul>
    </nav>
  );
};
