import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./index.scss";

export const Header = () => {
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
    {
      userId ? 'Hello Admin' : 'Hello User'
    }
    </div>
  );
};
