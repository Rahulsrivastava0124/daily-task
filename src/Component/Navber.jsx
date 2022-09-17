import React from "react";
import PropTypes from "prop-types";

function Navber(props) {
  // const [btnOnClick, setBtnOnClick] = useState('');
  function active(e) {
    let getActiveBtn = document.querySelectorAll(".active");
    getActiveBtn[0].classList.remove("active");
    e.target.classList.add("active");
  }
  
  return (
    <div
      className={`container rounded-pill bg-${props.color.bg} d-flex flex-row justify-content-between mt-3 align-items-center`}>
      {/* logo image */}
      <div className=" navbar d-flex flex-row justify-content-between">
        <div className="container rounded-pill bg-warning  shadow">
          <a className="navbar-brand pb-0 mx-0" href="/">
            <h5>{props.UserState}</h5>
          </a>
        </div>
      </div>

      {/* icon Lists */}
      <ul className="navbar-nav d-flex flex-row align-items-center fw-bolder">
        <li>
          <button
            className=" nav-item btn btn-outline-primary rounded-pill  m-2 fw-bold active shadow "
            onClick={active}>
            Home
          </button>
        </li>
        <li>
          <button
            className=" nav-item btn btn-outline-primary rounded-pill m-2 fw-bold shadow "
            onClick={active}>
            Daily list
          </button>
        </li>
        <li>
          <button
            className=" nav-item btn btn-outline-primary rounded-pill m-2 fw-bold shadow"
            onClick={active}>
            Task
          </button>
        </li>
        <li>
          <button
            className=" nav-item btn btn-outline-primary rounded-pill m-2 fw-bold shadow"
            onClick={active}>
            More
          </button>
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row align-items-center fw-bolder">
        <li>
          <button
            className={`nav-item btn btn-${props.darkLight} rounded-circle ColorMode  m-2 fw-bold shadow`}
            onClick={props.colorMode_dark} name="dark"></button>
        </li>
   
        <li>
          <button
            className="nav-item btn btn-outline-primary rounded-pill m-2 fw-bold shadow"
            onClick={active}>
    
            Login
          </button>
        </li>
        <li>
          <button
            className=" nav-item btn btn-outline-warning rounded-pill m-2 fw-bold shadow"
            onClick={active}>
        
            SignUp
          </button>
        </li>
        <li className="navbar hide">
          <a href="/" className="navbar-brand">
            {/* <img
              src="/logo192.png"
              alt=""
              width="42"
              height="35"
              className="border border-light rounded-circle "
            /> */}
            <i className="bi bi-person-circle"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
Navber.propTypes = {
  UserState: PropTypes.string,
};

Navber.defaultProps = {
  UserState: "Geast",
};
export default Navber;
