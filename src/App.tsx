import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { Login } from "./components/Login";
import { Dashboard } from "./pages/Dashboard";
import { FormCreate } from "./components/FormCreate";
import "./App.css";
import FullProductAdmin from "./pages/FullProductAdmin/FullProductAdmin";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/getOne/:id" element={<FullProductAdmin />} />
            <Route
              path="/admin/dashboard/create-post"
              element={<FormCreate />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
