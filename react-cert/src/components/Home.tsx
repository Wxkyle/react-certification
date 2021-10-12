import { useState } from "react";

function Home() {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validEmail = new RegExp(
    `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$`
  );
  const validPassword = new RegExp(`^(?=.*\\d)(?=.*[a-zA-Z]).{6,10}$`);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };

  return (
    <div className="test">
      <h1>Home</h1>
      <div className="loginModal">
        <div />
        <form className="login">
          <div>
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="emailFormInput"
              placeholder="email@email.com"
              // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            ></input>
            {emailErr ? (
              <p style={{ color: "red" }}>Your email is invalid</p>
            ) : null}
          </div>
          <div>
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="emailFormInput"
              placeholder="password"
              // pattern="^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$"
            ></input>
            {pwdError ? (
              <p style={{ color: "red" }}>Your password is invalid</p>
            ) : null}
          </div>
          <button onClick={() => validate()} className="submitButton">
            Login
          </button>
        </form>
        <div />
      </div>
    </div>
  );
}

export default Home;
