import React from "react";
import { marks } from "./marks-data";
import "./index.scss";

const PopularMarks = () => {
  return (
    <div className="marks">
      <h2>Популярные модели</h2>
      <div className="marks-list">
        {marks.map((el) => (
          <div className="marks-list__item">
            <img key={el.mark} src={el.img} alt={el.mark} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMarks;
