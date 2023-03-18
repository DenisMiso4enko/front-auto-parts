import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATHDOMAIN } from "../../constants";
import { RootState } from "../../store";
import "./index.scss";

export const Header = () => {
  const navigate = useNavigate()
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate(`${userId ? 'admin/dashboard' : ''}`)}>LOGO</div>
    {
      userId ? 'Hello Admin' : 'Hello User'
    }
    </div>
  );
};
