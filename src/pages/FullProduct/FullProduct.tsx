import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/productTypes";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import ProductItemFull from "../../components/UserInterface/ProductItem/ProductItemFull";
import "./index.scss";
import Salesman from "../../components/UserInterface/Salesman/Salesman";

const FullProduct = () => {
  const [data, setData] = useState({} as IProduct);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await httpRequest(`${PATHDOMAIN}/getOne/${id}`, "GET");
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <div className="preview main-container">
      <div className="preview__head">
        <h2>Запчасти</h2>
        <span>главная</span> - <span>запчасти</span> -
        <span>
          {data?.product} к {data?.model} {data?.mark}, {data?.year} г.
        </span>
      </div>
      <div className="preview-container fix">
        {data && <ProductItemFull {...data} />}
        <div className="salesman-container">
          <Salesman />
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
