import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 bg-${props.color.bg} text-${props.color.text} menu_style mx-1 rounded-3 mt-2 shadow`}
    >
      <span className="fs-4">Menu</span>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link
            to="/"
            className={`nav-link fw-bold btn btn-outline-warning my-1 text-${props.color.text} text-start`}
          >
            Routin Task
          </Link>
        </li>
        <li>
          <Link
            to="/Home/TodoList"
            className={`nav-link btn btn-outline-warning my-1 fw-bold text-${props.color.text} text-start`}
          >
            Todo List
          </Link>
        </li>
        <li>
          <Link
            to="/Home/Note"
            className={`nav-link fw-bold btn btn-outline-warning my-1 text-${props.color.text} text-start`}
          >
            Note
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          className={`d-flex align-items-center text-${props.color.text} text-decoration-none `}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User Name</strong>
        </Link>
      </div>
    </div>
  );
}
