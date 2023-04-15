import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!name) {
      errors.name = "Name is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors("");
      alert("Form Successfully Submitted!");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            autoComplete="off"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
  // }
}
export default App;
