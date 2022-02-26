import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ ss }) {
  const [status, setStatus] = useState(false);
  const miniPlayerRef = useRef();
  function miniPlayerToggler() {
    if (!status) {
      miniPlayerRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      miniPlayerRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  const videoUrl = `https://www.youtube.com/watch?v=${ss}`;
  return (
    <div
      className={`
   ${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={miniPlayerRef}
      onClick={miniPlayerToggler}
    >
      <span className={`${classes.open} material-icons-outlined`}>
        play_circle_filled
      </span>

      <span
        className={`${classes.close} material-icons-outlined`}
        onClick={miniPlayerToggler}
      >
        close
      </span>
      <ReactPlayer
        url={videoUrl}
        className={classes.player}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>video</p>
    </div>
  );
}
