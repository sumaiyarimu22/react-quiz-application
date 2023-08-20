import Checkbox from "./Checkbox";

import classes from "../styles/Answers.module.css";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox classname={classes.answer} text="Test answer" />
    </div>
  );
};

export default Answers;
