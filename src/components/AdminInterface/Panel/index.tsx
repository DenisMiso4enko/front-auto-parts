import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../store";
import { clearEditProduct, fetchGetEditProduct, fetchGetProducts } from "../../../store/slices/productSlice";
import FormSearch from "../../../components/AdminInterface/FormSearch/FormSearch";
import { Table } from "react-bootstrap";
import { IProduct } from "../../../types/productTypes";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { httpRequest } from "../../../httpRequests";
import { PATHDOMAIN } from "../../../constants";
import { columns } from "./dataTableColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useSelector((state: RootState) => state.user);
  const { products, currentPage, totalProducts } = useSelector(
    (state: RootState) => state.products
    );

  useEffect(() => {
    dispatch(clearEditProduct(null))
  }, [])

  const handlerCreateProduct = () => {
    navigate("/admin/dashboard/create-post");
  };

  const handlerDeleteProduct = async (id: string) => {
    try {
      await httpRequest(
        `${PATHDOMAIN}/admin/deleteProduct`,
        "DELETE",
        { id }
      );
      dispatch(fetchGetProducts(currentPage));
    } catch (e) {
      alert(e.message);
    }
  };

  const handlerEditProduct = (id: string) => {
    dispatch(fetchGetEditProduct(id))
    navigate("/admin/dashboard/create-post");

  }

  return (
    <>
      <h2 className="dashboard__title">
        Панель администратора <span>{userId}</span>
      </h2>
      <FormSearch />
      <div className="dashboard__head">
        <h3>Товары</h3>
        <div className="dashboard__actions">
          <span>Всего: {totalProducts}</span>
          <button className="btn btn-success" onClick={handlerCreateProduct}>
            Создать обьявление
          </button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((el) => (
              <th key={el.text}>{el.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((el: IProduct, i: number) => (
            <tr key={el._id}>
              <td>{i + 1}</td>
              <td>
                {el.mark} {el.model} <br />
                {el.product}
              </td>
              <td>{el.description}</td>
              <td>{el.article}</td>
              <td>{el.year}</td>
              <td>
                {el.price} {el.currency}
              </td>
              <td>{el.createdAt}</td>
              <td>{el.views}</td>
              <td>
                <div className="tb-actions">
                  <button className="btn" onClick={() => handlerEditProduct(el._id)}>
                    <FaRegEdit />
                  </button>
                  <button
                    className="btn btn-lg"
                    onClick={() => handlerDeleteProduct(el._id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
