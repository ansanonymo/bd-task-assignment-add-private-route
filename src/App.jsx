import { Routes, Route } from "react-router-dom";
import Home from "./pages/frontend/Home";
import FrontendLayout from "./components/frontend/FrontendLayout";
import About from "./pages/frontend/About";
import BackendLayout from "./components/backend/BackendLayout";
import Dashboard from "./pages/backend/Dashboard";
import ProductList from "./pages/backend/ProductList";
import AddProduct from "./pages/backend/AddProduct";
import NotFound from "./pages/frontend/NotFound";
import EditProduct from "./pages/backend/EditProduct";
import Login from "./pages/backend/Login";
import PrivateRoute from "./pages/backend/PrivateRoute";
function App() {
  return (
    <>
      <Routes>
        {/* frontend  */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Backend  */}
        <Route path="admin/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin/" element={<BackendLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
