import classes from "../styles/Question.module.css";
import Answers from "./Answers";
export default function Question({ answers = [] }) {
  return answers.map((questions, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {questions.title}
      </div>
      <Answers input={false} options={questions.options} />
    </div>
  ));
}
