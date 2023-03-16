import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { fetchGetMe } from "../../store/slices/userSlice";
import { fetchGetProducts } from "../../store/slices/productSlice";
import FormSearch from "../../components/FormSearch/FormSearch";
import { Table } from "react-bootstrap";
import { IProduct } from "../../types/productTypes";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useSelector((state: RootState) => state.user);
  const { products, searchValue } = useSelector(
    (state: RootState) => state.products
  );

  const handlerOnClick = () => {
    navigate("/admin/dashboard/create-post");
  };
  const handleDeleteProduct = async (id) => {
    try {
      const res = await httpRequest(
        `${PATHDOMAIN}admin/deleteProduct`,
        "DELETE",
        { id }
      );
      dispatch(fetchGetProducts());
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    dispatch(fetchGetMe());
    dispatch(fetchGetProducts());
  }, [searchValue]);

  if (!userId) return <h1>Авторизуйтесь!</h1>;

  const columns = [
    { dataField: "#", text: "#" },
    { dataField: "Марка и Модель", text: "Марка и Модель" },
    {
      dataField: "Описание, номер з/ч, склад.инфо ",
      text: "Описание, номер з/ч, склад.инфо ",
    },
    { dataField: "артикул", text: "артикул" },
    { dataField: "г.в", text: "г.в" },
    { dataField: "Цена", text: "Цена" },
    { dataField: "Дата", text: "Дата" },
    { dataField: "Действия", text: "Действия" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h2 className="dashboard__title">
          Панель администратора <span>{userId}</span>
        </h2>
        <FormSearch />
        <div className="dashboard__head">
          <h3>Товары</h3>
          <div className="dashboard__actions">
            <span>Всего: {products.length}</span>
            <button className="btn btn-success" onClick={handlerOnClick}>
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
            {products.map((el: IProduct, i) => (
              <tr key={el._id}>
                <td>{i + 1}</td>
                <td
                  onClick={() => navigate(`/admin/getOne/${el._id}`)}
                  style={{ cursor: "pointer" }}
                >
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
                <td>
                  <div className="tb-actions">
                    <button className="btn">
                      <FaRegEdit />
                    </button>
                    <button
                      className="btn btn-lg"
                      onClick={() => handleDeleteProduct(el._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
