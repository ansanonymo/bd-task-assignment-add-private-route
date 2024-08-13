import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute() {
  const { auth } = useContext(AuthContext);
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
}
