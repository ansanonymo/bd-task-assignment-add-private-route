import { useState } from "react";
import { AuthContext } from "./../context/AuthContext";
// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem("user") ?? null);

  const value = {
    auth,
    setAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
