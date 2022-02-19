import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading,setLoding] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  // handle submit
  async function handelSubmit(e) {
    e.preventDefault();

    // till now,i don't work with loading
    try {
      setLoding(true);
      setError("");
      await login(email, password);
      navigate("/");
    } catch {
      setLoding(false);
      setError("failed to login");
    }
  }

  return (
    <form
      className={`${classes.login} ${classes.form}`}
      onSubmit={handelSubmit}
    >
      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button disabled={loading} />
      <hr />
      {error && <p className="error">{error}</p>}

      <div className="info ">
        Don't have an account your? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
}
