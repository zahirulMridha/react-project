import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function PublicRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
}
