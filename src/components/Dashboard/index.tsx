import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { fetchGetMe } from "../../store/slices/userSlice";
import { fetchGetProducts } from "../../store/slices/productSlice";
import ProductList from "../ProductList/ProductList";
import "./index.scss";
import FormSearch from "../FormSearch/FormSearch";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useSelector((state: RootState) => state.user);
  const { products } = useSelector((state: RootState) => state.products);

  const handlerOnClick = () => {
    navigate("/admin/dashboard/create-post");
  };

  useEffect(() => {
    dispatch(fetchGetMe());
    dispatch(fetchGetProducts());
  }, []);

  if (!userId) return <h1>Авторизуйтесь!</h1>;

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h2 className="dashboard__title">Панель администратора</h2>
        <FormSearch />
        <div className="dashboard__head">
          <h3>Товары</h3>
          <div className="dashboard__actions">
            <p>Всего: {products.length}</p>
            <button onClick={handlerOnClick}>Создать обьявление</button>
          </div>
        </div>

        <p>{userId}</p>

        {products && <ProductList products={products} />}
      </div>
    </div>
  );
};
