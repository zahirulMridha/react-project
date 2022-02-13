import classes from "../styles/TextInput.module.css";
export default function TextInput({ type, placeholder, icon }) {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
