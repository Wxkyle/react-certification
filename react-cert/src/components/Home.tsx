import { useState } from "react";

function Home() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const formLogin = () => {};

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
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            ></input>
          </div>
          <div>
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="emailFormInput"
              placeholder="password"
              pattern="^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$"
            ></input>
          </div>
          <button onClick={() => formLogin()} className="submitButton">
            Login
          </button>
        </form>
        <div />
      </div>
    </div>
  );
}

export default Home;
