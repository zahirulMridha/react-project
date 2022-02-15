import { Link } from "react-router-dom";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

export default function LoginForm() {
  return (
    <form className={`${classes.login} ${classes.form}`} action="#">
      <TextInput
        type={"text"}
        placeholder={"Enter Email"}
        icon={"alternate_email"}
      />
      <TextInput
        type={"password"}
        placeholder={"Enter password"}
        icon={"lock"}
      />

      <Button />

      <div className="info ">
        Don't have an account your? <Link to="/login">Signup</Link> instead.
      </div>
    </form>
  );
}
