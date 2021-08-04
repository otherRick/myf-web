const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
