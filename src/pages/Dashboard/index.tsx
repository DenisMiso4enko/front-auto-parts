import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { PaginationAdmin } from "../../components/AdminInterface/Pagination";
import { Panel } from "../../components/AdminInterface/Panel";
import "./index.scss";

export const Dashboard = () => {
  const { userId } = useSelector((state: RootState) => state.user);

  if (!userId) return <h1>Авторизуйтесь!</h1>;

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <Panel/>
        <div className="pagination">
          <PaginationAdmin/>
        </div>
      </div>
    </div>
  );
};
