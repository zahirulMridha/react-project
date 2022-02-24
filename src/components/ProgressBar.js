import classess from "../styles/Button.module.css";
import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar({next,prev,progress,submit}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick ={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% completed</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style ={{width:`${progress}%`}}></div>
        </div>
      </div>
     
        <button className={`${classess.button} ${classes.next}`} onClick={progress === 100 ? submit : next }>
          <span>{progress===100 ? "submit" : "Next Question" }</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
    
    </div>
  );
}
