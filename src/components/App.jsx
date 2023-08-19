import "../styles/App.css";
import Layout from "./Layout";
import LoginPage from "./pages/Login";
// import HomePage from "./pages/Home";
// import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <SignupPage /> */}
      <LoginPage />
    </Layout>
  );
};

export default App;
