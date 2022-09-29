import React, { useState } from "react";

export default function Home_task(props) {
  let localstorage = JSON.parse(localStorage.getItem("RoutinTask"));

  const [routinList, setRoutinList] = useState(
    localstorage !== null ? localstorage : ["rahul", "kumar"]
  );
  const [add, setAdd] = useState(["add"]);
  const [update, setupdate] = useState("");
  console.log(routinList);

  const handelAdd = () => {
    console.log("add");
    setAdd([...add, "add"]);
  };
  const handelRemove = (index) => {
    console.log("remove");
    let newAdd = add.slice(1);
    setAdd(newAdd);
    console.log(add);
  };

  const saveHandel = () => {
    let myarr = [];
    myarr.push(document.getElementById("routinTitle").value);
    for (let index = 0; index < add.length; index++) {
      myarr.push(document.getElementById(`routin${index}`).value);
    }
    routinList.push(myarr);
    setRoutinList(routinList);
    let RotinString = JSON.stringify(routinList);
    localStorage.setItem("RoutinTask", `${RotinString}`);
    setupdate("hello rahul");
  };
  // body
  return (
    <>
      <div className=" w-100 m-3 mt-3 position-relative rounded-3 bg-light home_desk">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className=" btn btn-warning position-absolute bottom-0 end-0 m-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success" id="exampleModalLabel">
                  {props.menuBody.TaskTitle}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Modal body */}
                {//routinTask
                props.menuBody.TaskTitle === "Routin" ? (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTask1"
                        className="form-label"
                      >
                        Routin Title
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="routinTitle"
                        placeholder="Write a book"
                      />
                      <label
                        htmlFor="exampleFormControlTask2"
                        className="form-label my-2"
                      >
                        Routin List
                      </label>
                      {add.map((element, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              className="form-control my-1"
                              id={`routin${index}`}
                              placeholder="Write a book"
                            />
                            {add.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handelRemove(index)}
                              >
                                Remove
                              </button>
                            )}
                            {add.length - 1 === index && (
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() => handelAdd(index)}
                              >
                                Add
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={saveHandel}
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : //todoList
                props.menuBody.TaskTitle === "TodoList" ? (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTask1"
                        className="form-label"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlTask1"
                        placeholder="Write a book"
                      />
                      <label
                        htmlFor="exampleFormControlTask2"
                        className="form-label my-2"
                      >
                        Todo List
                      </label>
                      {add.map((element, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              className="form-control my-1"
                              id="exampleFormControlTask2"
                              placeholder="Write a book"
                            />
                            {add.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handelRemove(index)}
                              >
                                Remove
                              </button>
                            )}
                            {add.length - 1 === index && (
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() => handelAdd(index)}
                              >
                                Add
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </>
                ) : props.menuBody.TaskTitle === "Note" ? (
                  <>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Note textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        // onClick={}
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <h1>{props.menuBody.TaskTitle}</h1>
        {props.menuBody.TaskTitle === "Routin" ? (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {routinList.map((element, index) => {
                console.log(element);
                return (
                  <div className={update} key={index}>
                    <div
                      className="card border-primary mb-3"
                      style={{ maxWidth: "18rem", height: "238px" }} 
                    >
                      <div className="card-header text-warning">
                        {element[0]}
                      </div>
                      <div
                        className="card-body text-primary"
                        style={{ overflow: "auto" }}
                      >
                        <ul className="list-group list-group-flush">
                          {element.map((element, index) => {
                            return (
                              <li
                                key={index}
                                className="list-group-item"
                                style={index === 0 ? { display: "none" } : null}
                              >
                                {element}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
