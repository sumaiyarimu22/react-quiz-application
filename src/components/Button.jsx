import classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ className, children }) => {
  return (
    <div className={`${classes.button} ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
