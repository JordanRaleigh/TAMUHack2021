import React, { useState } from "react";
import Client from "../Client";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setalert] = useState("");

  const handleSubmission = async () => {
    // const payload = JSON.stringify({ email: email, password: password });
    // let res = await fetch("https://7a8424e98eb3.ngrok.io/api/user/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: payload,
    // });
    // try {
    //   let status = res.status;
    //   if (status !== 200) return console.log(await res.text());
    //   console.log(await res.text());
    // } catch (error) {
    //   console.log(error);
    // }
    let mes = await Client.login(email, password);
    setalert(mes);
  };

  return (
    <div {...props}>
      <h4>Login</h4>
      <input
        id="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="form-control my-4"
      />
      <input
        id="password"
        className="form-control  my-4"
        value={password}
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {alert && (
        <div class={`alert alert-danger`} role="alert">
          {alert}
        </div>
      )}
      <button className="btn btn-secondary" onClick={handleSubmission}>
        Login
      </button>
    </div>
  );
};

export default Login;
