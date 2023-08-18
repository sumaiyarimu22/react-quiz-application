import classes from "../styles/Form.module.css";

// eslint-disable-next-line react/prop-types
const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} {...rest} action="#">
      {children}
    </form>
  );
};

export default Form;
