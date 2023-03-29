import React from "react";
import "./index.scss";

const Salesman = () => {
  return (
    <div className="salesman">
      информация о прдавце
      <p>время работы</p>
      <p>город: Гомель</p>
      <p>адресс: Гомель, авторынок</p>
      <div className="salesman__phones">
        <p>телефоны</p>
        <p>телефоны</p>
        <p>телефоны</p>
      </div>
      <p className="">скажите что звоните с сайта ...</p>
    </div>
  );
};

export default Salesman;
