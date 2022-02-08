import { useAtom } from "jotai";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loggedInAtom } from "./AllAtoms";
import Navbar from "./Navbar";


//#function component
function Home() {

  //# state
  //# react hooks
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [pwdError, setPwdError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);

  //#block scoped variable
  let savedLogin = {};

  //#block scoped variable
  const validEmail = new RegExp(
    `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$`
  );

  //#block scoped variable
  const validPassword = new RegExp(`^(?=.*\\d)(?=.*[a-zA-Z]).{6,10}$`);

  const history = useHistory();


  //# arrow function
  const validate = () => {
    setLoading(true);

    !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false);

    !validPassword.test(password) ? setPwdError(true) : setPwdError(false);

    if (!emailErr && !pwdError) {
      savedLogin = JSON.stringify({ email: email, password: password });
    }

    //#closure
    setTimeout(() => {
      setLoading(false);

      if (email && password && !emailErr && !pwdError) {
        //# array function
        history.push("/Search");
        setLoggedIn(true);
      }
    }, 1500);
  };


  //# JSX / rendering element
  return (
    <div>
      <Navbar loggedIn={loggedIn}></Navbar>
      <div className="background">
        <div className="test">
          <h1>Home</h1>
          <div className="loginModal">
            <div />
            <div className="login">
              <div>
                <p>Email</p>
                <input
                  //# event handling
                  onChange={(e) => setEmail(e.target.value)}
                  //# style
                  className="emailFormInput"
                  placeholder="email@email.com"
                  data-testid="emailLogin"
                // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                ></input>
                {emailErr ? (
                  <p
                    data-testid="emailRedText"
                    style={{ color: "red" }}>Your email is invalid</p>
                ) : null}
              </div>
              <div>
                <p>Password</p>
                <input
                  //# event handling
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  className="emailFormInput"
                  placeholder="password"
                  data-testid="passwordLogin"
                // pattern="^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$"
                ></input>
                {pwdError ? (
                  <p
                    data-testid="passwordRedText"
                    //# style
                    style={{ color: "red" }}>Your password is invalid</p>
                ) : null}
              </div>
              <button data-testid="buttonLogin"
                //# arrow function
                onClick={() => validate()} className="submitButton">
                {loading ? <div id="loading" /> : "Login"}
              </button>
            </div>
            <div />
          </div>
          <div>
            <div>
              {loggedIn ? (
                <div>
                  <Link to="/Categories">Categories</Link>- This is a page that
                  lists the categories of the site.
                </div>
              ) : (
                <div>
                  Categories- This is a page that lists the categories of the
                  site.
                </div>
              )}
            </div>
            <div>
              {loggedIn ? (
                <div>
                  <Link to="/Jokes">Jokes</Link>- This is a page that has funny
                  stuff.
                </div>
              ) : (
                <div>Jokes- This is a page that has funny stuff.</div>
              )}
            </div>
            <div>
              {loggedIn ? (
                <div>
                  <Link to="/Search">Search</Link>- This is where you can search
                  things.
                </div>
              ) : (
                <div>Search- This is where you can search things.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
