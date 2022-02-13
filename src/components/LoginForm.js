import Button from "./Button";
import TextInput from "./TextInput";
import classes from "../styles/Form.module.css";
export default function LoginForm(){
   return(
  <form className={`${classes.login} ${classes.form}`} action="#">
  <TextInput type={"text"} placeholder={"Enter Email"} icon={"alternate_email"}/>
  <TextInput type={"password"} placeholder={"Enter password"} icon={"lock"}/>

  <Button />

  <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

</form>
   );
}