import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { Login } from "./components/AdminInterface/Login";
import { Dashboard } from "./pages/Dashboard";
import { FormCreate } from "./components/AdminInterface/FormCreate";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { fetchOptions } from "./store/slices/settingsSlice";
import AutoParts from "./pages/AutoParts/AutoParts";
import Guarantee from "./pages/Guarantee/Guarantee";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import FullProduct from "./pages/FullProduct/FullProduct";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOptions());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/auto-parts" element={<AutoParts />} />
            <Route path="/auto-parts/:id" element={<FullProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/delivery" element={<Delivery />} />

            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route
              path="/admin/dashboard/create-post"
              element={<FormCreate />}
            />
            <Route path="/admin/dashboard/:id/edit" element={<FormCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
