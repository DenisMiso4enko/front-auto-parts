import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { fetchGetMe } from "../../store/slices/userSlice";
import { fetchGetProducts } from "../../store/slices/productSlice";
import ProductListItem from "../ProductListItem/ProductListItem";
import ProductList from "../ProductList/ProductList";

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
    <>
      <h2>Dashboard</h2>
      <p>{userId}</p>
      <button onClick={handlerOnClick}>Создать обьявление</button>

      {products && <ProductList products={products} />}
    </>
  );
};
