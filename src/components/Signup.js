import React, { useState } from "react";

import Client from "../Client";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setalert] = useState("");

  const handleSubmission = async () => {
    let res = await Client.signup(name, email, password);
    if (res) setalert(res);
    // const payload = JSON.stringify({
    //   name: name,
    //   email: email,
    //   password: password,
    // });
    // let res = await fetch("https://7a8424e98eb3.ngrok.io/api/user/register", {
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
  };

  return (
    <div {...props}>
      <h4>Create a new account</h4>
      <input
        id="name"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="form-control my-4"
      />
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
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="form-control my-4"
      />
      {alert && (
        <div
          class={`alert alert-${
            alert.includes("success") ? "success" : "warning"
          }`}
          role="alert"
        >
          {alert}
        </div>
      )}

      <button className="btn btn-primary" onClick={handleSubmission}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
