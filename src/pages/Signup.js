import image from "../assets/images/signup.svg";
import Form from "../components/Form";
import classes from "../styles/Illustration.module.css";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <div className={classes.illustration}>
          <img src={image} alt="Signup" />
        </div>
        <Form />
      </div>
    </>
  );
}
