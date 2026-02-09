import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = sessionStorage.getItem("user");

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
