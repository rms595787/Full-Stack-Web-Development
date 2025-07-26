import { useState } from "react";
import "../style.css";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorUserEmail, setErrorUserEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [userEmailColor, setUserEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (userName.length >= 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("User Name must contain atleast 8 characters");
      setUserNameColor("red");
    }

    if (userEmail.includes("@gmail")) {
      setErrorUserEmail("");
      setUserEmailColor("green");
    } else {
      setErrorUserEmail("Email must contain @gmail");
      setUserEmailColor("red");
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must contain atleast 8 characters");
      setPasswordColor("red");
    }

    if (confirmPassword !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password doesn't match");
      setConfirmPasswordColor("red");
    }
  };
  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          style={{ borderColor: userNameColor }}
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="error">{errorUserName}</p>

        <input
          style={{ borderColor: userEmailColor }}
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <p className="error">{errorUserEmail}</p>

        <input
          style={{ borderColor: passwordColor }}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>

        <input
          style={{ borderColor: confirmPasswordColor }}
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>

        <button type="submit" className="submit-btn" onClick={validate}>
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
