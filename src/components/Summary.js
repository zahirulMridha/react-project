import successImage from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

import useFetch from "../hooks/useFetchApi";

export default function Summary({ score, noq }) {
  const getKeyword = () => {
    if ((score / (noq * 4)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 4)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 4)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  };
  const funcGet = getKeyword();
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${funcGet}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  const image = result ? result?.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 4}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading your badge...</div>}

{error && <div className={classes.badge}>An error occured!</div>}

{!loading && !error && (
      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div> )}
    </div>
  );
}
