import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const App = () => {
  const { currentUser } = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="quiz"
          element={currentUser ? <Quiz /> : <Navigate to="/login" />}
        />
        <Route
          path="result"
          element={currentUser ? <Result /> : <Navigate to="/login" />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
