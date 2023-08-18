import "../styles/App.css";
import Layout from "./Layout";
// import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      <SignupPage />
    </Layout>
  );
};

export default App;
