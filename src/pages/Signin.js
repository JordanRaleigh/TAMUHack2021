import React, { useState } from "react";
import FoodItemcontainer from "../components/FoodItemContainer";
import Login from "../components/Login";
import Search from "../components/Search";
import SignUp from "../components/Signup";

function Signin() {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center "
      style={{ height: "80vh", backgroundColor: "#fafafa" }}
    >
      <div className="row m-auto w-75">
        <Login className="col-md-5 signinCard p-4 mx-auto my-1" />
        <SignUp className="col-md-5 signinCard p-4 mx-auto my-1" />
      </div>
    </div>
  );
}

export default Signin;
