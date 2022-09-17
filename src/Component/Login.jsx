import React from "react";
import loginImg from "../loginImg.png";

function Login(props) {
  return (
    <div className={`container  mt-4 p-5 bg-${props.color.bg}    rounded-4 fw-bolder`}>
      <div className="d-flex flex-row shadow rounded-4 ">
        <form className="row g-3 w-50 p-3   ">
          <h1 className={`text-center text-${props.color.text}`}>Login</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">  Password</label>
          </div>

          <button type="submit" className="btn  btn-warning w-25 mx-2">
            Submit
          </button>
        </form>
        <div className="">
          <img src={loginImg} alt="" className="loginImg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
