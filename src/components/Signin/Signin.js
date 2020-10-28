import React, { useState } from "react";
import "./Signin.css";

function Signin({ onRouteChange }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const value = e.target.value;
    setCredentials({ ...credentials, [e.target.name]: value });
    console.log(e.target.name);
    console.log(value);
  }

  return (
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">
                Email
              </label>
              <input
                className="form-control pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                name="email"
                type="text"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="Input your email"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="form-control pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="password"
                aria-label="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Signin;
