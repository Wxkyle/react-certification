import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [pwdError, setPwdError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  let savedLogin = {};

  const validEmail = new RegExp(
    `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$`
  );
  const validPassword = new RegExp(`^(?=.*\\d)(?=.*[a-zA-Z]).{6,10}$`); //still needs to require one capital letter

  const history = useHistory();

  const validate = () => {
    setLoading(true);

    setTimeout(() => {
      !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false); //look at notes for other way to test Jer told you

      !validPassword.test(password) ? setPwdError(true) : setPwdError(false);

      if (!emailErr && !pwdError) {
        savedLogin = JSON.stringify({ email: email, password: password });
      }
      setLoading(false);

      if (email && password && !emailErr && !pwdError) {
        history.push("/Search");
        setLoggedIn(true)
      }
    }, 1500);
  };

  return (
    <div>
      <Navbar loggedIn={loggedIn}></Navbar>
      <div className="test">
        <h1>Home</h1>
        <div className="loginModal">
          <div />
          <div className="login">
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
              {loading ? <div id="loading" /> : "Login"}
            </button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Home;
