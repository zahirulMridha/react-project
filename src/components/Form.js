import classes from "../styles/Form.module.css";
import TextInput from "./TextInput";
export default function Form() {
  return (
    <form className={`${classes.signup} ${classes.form}`} action="#">
      <TextInput type={"text"} placeholder={"Enter Name"} icon={"person"} />
      <TextInput
        type={"text"}
        placeholder={"Enter Email"}
        icon={"alternate_email "}
      />
      <TextInput
        type={"password"}
        placeholder={"Enter password"}
        icon={"lock"}
      />
      <TextInput
        type={"password"}
        placeholder={"Confirm password"}
        icon={"lock_clock"}
      />

      <label>
        <input type="checkbox" />
        <span> I agree to the Terms Conditions</span>
      </label>

      <div className={classes.button}>
        <span>Submit now</span>
      </div>

      <div class="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </form>
  );
}
