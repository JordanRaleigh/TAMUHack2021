import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

import Client from "../Client";

const Nav = (props) => {
  return (
    <div className="div bg-light">
      <nav class="navbar navbar-expand-sm navbar-light bg-light container-fluid w-75">
        <a class="navbar-brand" href="/">
          Fooditt 🍔
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul></ul>
          <ul class="navbar-nav m-auto mt-2 mt-lg-0">
            <Link to="/" className="nav-item">
              <li class="nav-link text-capitalize">Food</li>
            </Link>
            <Link to="/scan" className="nav-item">
              <li class="nav-link text-capitalize">Scan</li>
            </Link>
          </ul>
          <button
            class={`btn btn-outline-${
              Client.isLoggedIn() ? "danger" : "success"
            } my-2 my-sm-0 ml-auto`}
            onClick={() => {
              Client.isLoggedIn()
                ? Client.logout()
                : (window.location.href = "/signin");
            }}
          >
            {!Client.isLoggedIn() ? "Login / Sign Up" : "Logout"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
