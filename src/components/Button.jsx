import classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ className, children }) => {
  return (
    <button className={`${classes.button} ${className}`}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
