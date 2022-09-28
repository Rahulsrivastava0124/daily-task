import React from "react";
import { Link } from "react-router-dom";

function Navber(props) {
  // const [btnOnClick, setBtnOnClick] = useState('');
  function active(e) {
    let getActiveBtn = document.querySelectorAll(".active");
    getActiveBtn[0].classList.remove("active");
    e.target.classList.add("active");
  }
  
  return (
    <div
      className={` bg-${props.color.bg} d-flex flex-row justify-content-between px-2 align-items-center shadow`}
    >
      {/* logo image */}
      <div className=" navbar d-flex flex-row justify-content-between">
        <div className="container rounded-pill bg-warning  shadow">
          <Link className="navbar-brand pb-0 mx-0" to="/Home/RoutinTask">
            <h5>Tasks</h5>
          </Link>
        </div>
      </div>

      {/* icon Lists */}
      <ul className="navbar-nav d-flex flex-row align-items-center fw-bolder">
        <li>
          <Link
            to="/"
            className={` nav-item btn btn-outline-warning text-${props.darkLight} rounded-pill  m-2 fw-bold active shadow `}
            onClick={active}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/More"
            className={`nav-item btn btn-outline-warning text-${props.darkLight}  rounded-pill m-2 fw-bold shadow `}
            onClick={active}
          >
            More
          </Link>
        </li>
        <li>
          <Link
            to="/AboutUs"
            className={` nav-item btn btn-outline-warning text-${props.darkLight} rounded-pill m-2 fw-bold shadow`}
            onClick={active}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/Portfolio"
            className={` nav-item btn btn-outline-warning text-${props.darkLight} rounded-pill m-2 fw-bold shadow`}
            onClick={active}
          >
            potfolio
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row align-items-center fw-bolder">
        {/* dark Mode btn */}
        <li>
          <button
            className={`nav-item btn btn-${props.darkLight} rounded-circle ColorMode  m-2 fw-bold shadow`}
            onClick={props.colorMode_dark}
          ></button>
        </li>
        {/* login and SignUp btn */}
        <li>
          <Link
            to="/Login"
            className="nav-item btn btn-outline-primary rounded-pill m-2 fw-bold shadow"
            onClick={active}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/SignUp"
            className=" nav-item btn btn-outline-warning rounded-pill m-2 fw-bold shadow"
            onClick={active}
          >
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navber;
