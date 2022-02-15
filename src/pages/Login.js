import image from "../assets/images/login.svg";
import LoginForm from "../components/LoginForm";
import classes from "../styles/Illustration.module.css";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <div className={classes.illustration}>
          <img src={image} alt="Login" />
        </div>
        <LoginForm />
      </div>
    </>
  );
}
