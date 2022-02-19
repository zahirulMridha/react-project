import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/Authcontext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Signup from "../pages/Signup";
import PrivateRoute from "../route/privateRoute";
import PublicRoute from "../route/publicRoute";
import "../styles/App.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quiz"
              element={
                <PublicRoute>
                  <Quiz />
                </PublicRoute>
              }
            />
            <Route
              path="/result"
              element={
                <PublicRoute>
                  <Result />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRoute>
                  <Signup />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <Login />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
