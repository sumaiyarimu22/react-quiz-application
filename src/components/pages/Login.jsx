import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";
import Illustration from "../Illustration";

import classes from "../../styles/Login.module.css";

const LoginPage = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            required
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            required
          />
          <Button type="submit">
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Dont have an account?<a href=""> Signup </a>
            instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
