import classes from "../styles/Button.module.css";
export default function Button({disabled}) {
  return (
    <button className={classes.button} type="submit" disabled={disabled}>
      <span>Submit now</span>
    </button>
  );
}
