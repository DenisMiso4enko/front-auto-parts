import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { NavMenuAdmin } from "../AdminInterface/NavMenuAdmin";
import { NavMenuUser } from "../UserInterface/NavMenuUser";
import "./index.scss";

export const Header = () => {
  const navigate = useNavigate()
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate(`${userId ? 'admin/dashboard' : ''}`)}>AUTOGOMEL</div>
    {
      userId ? <NavMenuAdmin /> : <NavMenuUser />
    }
    </div>
  );
};
