import classes from "../styles/TextInput.module.css";
export default function TextInput({
  type,
  placeholder,
  icon,
  value,
  onChange,
}) {
  return (
    <div className={classes.textInput}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
