import classes from "../styles/Button.module.css";
export default function Button() {
  return (
    <button className={classes.button} type="submit" >
      <span>Submit now</span>
    </button>
  );
}
