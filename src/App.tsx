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
