import "../styles/App.css";
import Layout from "./Layout";
import QuizPage from "./pages/Quiz";
// import LoginPage from "./pages/Login";
// import HomePage from "./pages/Home";
// import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      <QuizPage />
    </Layout>
  );
};

export default App;
