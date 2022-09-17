import signImg from "../signImg.png";
import React from "react";

function SignUp(props) {
  return (
    <>
      <div className={`container  mt-4 p-5 bg-${props.color.bg}  rounded-4 fw-bolder`}>
        <div className=" Sign_form_bg rounded-4 d-flex flex-row shadow">
          <form className="row g-3 w-50 p-3  ">
            <h1 className={`text-center text-${props.color.text}`}>SignUp</h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword"> Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder=" Confirm Password"
                required
              />
              <label htmlFor="floatingPassword"> Confirm Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="9504981942"
                required
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className={`text-center text-${props.color.text} form-label`}>
                 file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" className="btn btn-warning w-25 mx-2">
              Submit
            </button>
          </form>
          <div className="">
            <img src={signImg} alt="" className="signImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
