import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import "./index.scss";

const FullProductAdmin = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  console.log(images);

  const getOneProductAdmin = async () => {
    try {
      const request: Response = await httpRequest(
        `${PATHDOMAIN}admin/getOne/${id}`,
        "GET"
      );
      const response = await request.json();
      setData(response);
      setImages(response.imagesUrl);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getOneProductAdmin();
  }, []);

  return (
    <div className="dashboard-container">
      {data && (
        <div className="full-part">
          <h1>
            {data.mark} {data.model}
          </h1>
          <div className="full-part__images">
            {images.map((el) => (
              <img
                className="full-part__image"
                src={`http://localhost:8888${el}`}
                alt="photo"
              />
            ))}
          </div>
          <p>{data.product}</p>
        </div>
      )}
    </div>
  );
};

export default FullProductAdmin;
