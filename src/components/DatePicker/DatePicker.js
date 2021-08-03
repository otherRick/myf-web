import "./styles.css";

const DatePicker = (props) => {
  return (
    <div>
      <label htmlFor="date-picker">{props.label}</label>
      <input name="date-picker" type="date" />
    </div>
  );
};

export default DatePicker;
