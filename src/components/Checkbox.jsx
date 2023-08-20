// eslint-disable-next-line react/prop-types
const Checkbox = ({ classname, text, ...rest }) => {
  return (
    <label className={classname}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
