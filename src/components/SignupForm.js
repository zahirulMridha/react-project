import { Link } from "react-router-dom";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

export default function SignupForm() {
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

      <Button />

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
}
