import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

export default function PrivateRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  const role = localStorage.getItem("role");
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return user ? children : <Navigate to="/login" />;
}
