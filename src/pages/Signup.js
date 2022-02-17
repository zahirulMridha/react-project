import image from "../assets/images/signup.svg";
import SignupForm from "../components/SignupForm";
import classes from "../styles/Illustration.module.css";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <div className={classes.illustration}>
          <img src={image} alt="Signup" />
        </div>
        <SignupForm />
      </div>
    </>
  );
}










