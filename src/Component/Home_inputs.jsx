import React, { useState } from "react";

export default function Home_task(props) {
  //Routin data State
  let routinstorage = JSON.parse(localStorage.getItem("RoutinTask"));
  const [routinList, setRoutinList] = useState(
    routinstorage !== null ? routinstorage : [["rahul", "kumar"]]
  );

  //Todo data State
  let todostorage = JSON.parse(localStorage.getItem("TodoTask"));
  const [TodoList, setTodoList] = useState(
    todostorage !== null ? todostorage : [["rahul", "kumar"]]
  );
  console.log(TodoList);

  const [add, setAdd] = useState(["add"]);
  const [update, setupdate] = useState("");

  //handel input add
  const handelAdd = () => {
    setAdd([...add, "add"]);
  };

  //handel input remove
  const handelRemove = (index) => {
    let newAdd = add.slice(1);
    setAdd(newAdd);
  };

  //save the in local host and Show The data in card form in Container
  //Routin Task Save Function
  const saveHandelRoutin = () => {
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

  //Todo Task Save Function
  const saveHandelTodo = () => {
    let myarr = [];
    myarr.push(document.getElementById("todoTitle").value);
    for (let index = 0; index < add.length; index++) {
      myarr.push(document.getElementById(`Todo${index}`).value);
    }
    TodoList.push(myarr);
    setTodoList(TodoList);
    let RotinString = JSON.stringify(TodoList);
    localStorage.setItem("TodoTask", `${RotinString}`);
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
                    <div className=" mb-3">
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
                          <div key={index} className="input-group mb-3">
                            <span className="input-group-text">
                              {index + 1}
                            </span>
                            <input
                              type="text"
                              className="form-control "
                              id={`routin${index}`}
                              placeholder="Write a book"
                              aria-label="Amount (to the nearest dollar)"
                            />

                            {add.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handelRemove(index)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            )}
                            {add.length - 1 === index && (
                              <button
                                className="btn btn-sm btn-primary mx-1 "
                                onClick={() => handelAdd(index)}
                              >
                                <i className="bi bi-plus-lg"></i>
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
                        onClick={saveHandelRoutin}
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
                        id="todoTitle"
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
                          <div key={index} className="input-group mb-3">
                            <span className="input-group-text">
                              {index + 1}
                            </span>

                            <input
                              type="text"
                              className="form-control "
                              id={`Todo${index}`}
                              placeholder="Write a book"
                            />
                            {add.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handelRemove(index)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            )}
                            {add.length - 1 === index && (
                              <button
                                className="btn btn-sm btn-primary mx-1"
                                onClick={() => handelAdd(index)}
                              >
                                <i className="bi bi-plus-lg"></i>
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
                        onClick={saveHandelTodo}
                      >
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
{/* menu Output body Container */}
        <h1>{props.menuBody.TaskTitle}</h1>
        {props.menuBody.TaskTitle === "Routin" ? (
          <div
            className="container"
            style={{
              overflow: "auto",
            }}
          >
            <div className="row row-cols-1 row-cols-md-4 g-3">
              {routinList.length !== 1 ? (
                routinList.map((element, index) => {
                  return (
                    <div className={update} key={index}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "18rem",
                          height: "238px",
                        }}
                      >
                        <div className="card-header bg-warning">
                          {element[0]}
                        </div>
                        <div
                          className="card-body text-primary"
                          style={{
                            overflow: "auto",
                          }}
                        >
                          <ul className="list-group list-group-flush">
                            {element.map((element, index) => {
                              return (
                                <li
                                  key={index}
                                  className="list-group-item"
                                  style={
                                    index === 0
                                      ? {
                                          display: "none",
                                        }
                                      : null
                                  }
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
                })
              ) : (
                <h1> please create a Routin</h1>
              )}
            </div>
          </div>
        ) : props.menuBody.TaskTitle === "TodoList" ? (
          <div
            className="container"
            style={{
              overflow: "auto",
            }}
          >
            <div className="row row-cols-1 row-cols-md-4 g-3">
              {TodoList.length !== 1 ? (
                TodoList.map((element, index) => {
                  return (
                    <div className={update} key={index}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "18rem",
                          height: "238px",
                        }}
                      >
                        <div className="card-header bg-warning">
                          {element[0]}
                        </div>
                        <div
                          className="card-body text-primary"
                          style={{
                            overflow: "auto",
                          }}
                        >
                          <ul className="list-group list-group-flush">
                            {element.map((element, index) => {
                              return (
                                <li
                                  key={index}
                                  className="list-group-item"
                                  style={
                                    index === 0
                                      ? {
                                          display: "none",
                                        }
                                      : null
                                  }
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
                })
              ) : (
                <h1> please create a TodoList</h1>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
