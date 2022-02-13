import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className={classes.main}>
        <div className={classes.container}>
          {children}
          </div>
      </div>
    </div>
  );
}
