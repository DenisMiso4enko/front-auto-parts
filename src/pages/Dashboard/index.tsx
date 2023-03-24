import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { PaginationAdmin } from "../../components/AdminInterface/Pagination";
import { Panel } from "../../components/AdminInterface/Panel";
import { useEffect } from "react";
import { fetchGetMe } from "../../store/slices/userSlice";
import { fetchGetProducts } from "../../store/slices/productSlice";
import "./index.scss";

export const Dashboard = () => {
  const { currentPage } = useSelector((state: RootState) => state.products);
  const { userId } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetMe());
    dispatch(fetchGetProducts(currentPage));
  }, [currentPage]);

  if (!userId) return <h1>Авторизуйтесь</h1>;
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <Panel />
        <div className="pagination">
          <PaginationAdmin />
        </div>
      </div>
    </div>
  );
};
