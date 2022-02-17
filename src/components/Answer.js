import classes from "../styles/Answer.module.css";
export default function Answer({ type, id }) {
  return (
    <label className={classes.answer} >
      <input type={type} id={id} />A New Hope 1
    </label>
  );
}
