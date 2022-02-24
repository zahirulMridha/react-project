import Question from "./Question";

export default function Analysis({answers}) {
  return (
    <div className="analysis" style={{ margin: "2rem auto" }}>
      <h1>Question Analysis</h1>
      <Question answers={answers} />
    </div>
  );
}
