import classes from "../styles/Answers.module.css";
import Answer from "./Answer";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Answer type="checkbox" id="option1" />
      <Answer type="checkbox" id="option2" />
      <Answer type="checkbox" id="option3" />
      <Answer type="checkbox" id="option4" />
      <Answer type="checkbox" id="option5" />
      <Answer type="checkbox" id="option6" />
      <Answer type="checkbox" id="option7" />
      <Answer type="checkbox" id="option8" />
      <Answer type="checkbox" id="option9" />
      <Answer type="checkbox" id="option10" />
    </div>
  );
}
