import { Fragment } from "react/cjs/react.production.min";
import classes from "../styles/Answers.module.css";
import Checkbox from "./checkbox";
export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              key={index}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              text={option.title}
              defaultChecked={option.checked}
              disabled
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
