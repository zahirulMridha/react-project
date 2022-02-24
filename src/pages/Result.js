import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import useAnswers from "../hooks/useAnswers";

export default function Result() {
  const { ss } = useParams();
  const { loading, error, answers } = useAnswers(ss);
  const location = useLocation();
  const { state } = location;

  // score calculate function
  function scoreCalculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctQuestion = [],
        userAnswers = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctQuestion.push(index2);
        if (state[index1].options[index2].checked) {
          userAnswers.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctQuestion, userAnswers)) {
        score = score + 5;
      }
    });
    return score;
  }
  const userScore = scoreCalculate();
  const noq = answers.length;
  return (
    <>
      {loading && <div>Loading.....</div>}
      {error && <div> Error occured</div>}
      {!loading && !error && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={noq} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
