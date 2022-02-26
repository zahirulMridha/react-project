import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

// sign up form
export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <form
      className={`${classes.signup} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextInput
        type="text"
        placeholder="Enter Name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email "
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
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <span> I agree to the Terms Conditions</span>
      </label>

      <Button disabled={loading} />
      <hr />
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
}
