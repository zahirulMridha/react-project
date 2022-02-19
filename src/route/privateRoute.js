import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : children;
}
