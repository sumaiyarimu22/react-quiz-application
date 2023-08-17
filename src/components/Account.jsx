import classes from "../styles/Account.module.css";
const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout">
        logout
      </span> */}
    </div>
  );
};

export default Account;
