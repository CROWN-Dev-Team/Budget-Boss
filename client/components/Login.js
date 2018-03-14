import React, { Component } from "react";
// var materialize = require('materialize-css');
// import "../css/Login.css"

const login = props => {
  return (
    <div>
      <div class="center-align">
        <img src="budgetbosslogo1.png" class="responsive-img" />
        <h1 class="align-center header">Budget Boss</h1>
        <h5 class="align-center header">
          A minimalist approach to managing your finances.
        </h5>
      </div>

      <div class="container">
        <div class="center-align">
          <div class="card login hoverable">
            <div class="card-action">
              <a href="#" class="active green-text">
                Login
              </a>
              <a href="#" class="grey-text">
                Register
              </a>
            </div>

            <div class="card-content">
              <form method="post" class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="validate"
                    />
                    <label for="email">Enter your email</label>
                  </div>

                  <div class="input-field col s12">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="validate"
                    />
                    <label for="password">Enter your password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="right-align">
                    <label>
                      <a href="/user/forgot-password" class="pink-text">
                        <b>Forgot Password?</b>
                      </a>
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="left-align">
                    <input type="checkbox" id="test5" />
                    <label for="test5">Remember Me</label>
                  </div>
                </div>
                <div class="row center-align">
                  <button
                    type="submit"
                    name="btn_login"
                    class="col s12 btn btn-large waves-effect green"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
