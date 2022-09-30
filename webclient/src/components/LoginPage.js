import React from "react";

function LoginPage() {
  return (
    <div className="loginContainer">
      <div>
        <img
          src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
          alt=""
        />

        <div className="loginFormDiv">
          <div>
            <h3 className="loginHeading">Sign In </h3>
          </div>
          <div>
            <form>
              <div>
                <label className="loginLabel">E-mail</label>
                <input
                  required
                  type={"email"}
                  className="inputStyle1"
                  placeholder="Enter Email/Username"
                  aria-required="true"
                ></input>
              </div>
              <div>
                <label className="loginLabel">Password</label>
                <input
                  required
                  type={"password"}
                  className="inputStyle1"
                  placeholder="Enter Password"
                  aria-required="true"
                ></input>
              </div>
            </form>
          </div>
          <div>
            <span>
              <button
                style={{
                  width: "70px",
                  height: "40px",
                  backgroundColor: "darkcyan",
                  marginRight: "20px",
                  borderStyle: "hidden",
                  color: "whitesmoke",
                  fontWeight: "400",
                }}
                type="submit"
              >
                LOGIN
              </button>
            </span>
            <span>
              <input type={"checkbox"} id="remember"></input>
              <label htmlFor="remember">Remember Me</label>
            </span>
          </div>
        </div>

        <a href="/newAccount">
          <button className="btn-newAccount" type="submit">
            Create New Account
          </button>
        </a>
      </div>
      <div>
        <a href="https://www.brninfotech.com/" target={"_blank"}>
          <button className="website">2022 © BRN Infotech Pvt. Ltd.</button>
        </a>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default LoginPage;
