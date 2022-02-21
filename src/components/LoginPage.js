import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //Some fancy firebase stuff
  };
  const register = (e) => {
    e.preventDefault();
    //Some fancy firebase stuff
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/KHBQ4LE6CJGQRA6LIKISDCCVHE.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          eveniet illum iusto assumenda laudantium, harum quasi voluptatem
          obcaecati sed alias cupiditate corporis asperiores placeat quae
          deserunt nostrum. Odio, possimus animi!
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
