import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavMenuAdmin } from "../AdminInterface/NavMenuAdmin";
import { NavMenuUser } from "../UserInterface/NavMenuUser";
import "../../scss/components/_header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const locate = useLocation()

  if (locate.pathname.includes('/admin')) {
  return (
      <div className="header-admin">
        <div className="wrapper">
          <div className="header-admin__body">
            <div className="header-admin__logo" onClick={() => navigate("admin/dashboard")}>
              AUTOGOMEL
            </div>
            <NavMenuAdmin />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="header__body">
            <div className="header__logo"><span className="header__logo-red">AUTO</span>GOMEL</div>
            <NavMenuUser />
            <div className="header__tel"><a href="tel:+375298734927">+375 (00) 000-00-00</a></div>
          </div>
        </div>
      </div>
    )
  }
};
