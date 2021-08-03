const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default Input;
