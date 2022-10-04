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
  const [TodoEditList, setTodoEditList] = useState([0, 0]);
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

  //deleteCard
  //RoutinDeleteCard
  const RoutinDeleteCard = (index) => {
    routinstorage.splice(index, 1);
    setRoutinList(routinstorage);
    let Deleted_data_set_local = JSON.stringify(routinstorage);
    localStorage.setItem("RoutinTask", Deleted_data_set_local);
    setupdate("Removed Routin Card");
  };

  //TodoDeleteCard
  const TodoDeleteCard = (index) => {
    todostorage.splice(index, 1);
    setTodoList(todostorage);
    let Deleted_data_set_local = JSON.stringify(todostorage);
    localStorage.setItem("TodoTask", Deleted_data_set_local);
    setupdate("Removed TodoList Card");
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
    document.getElementById("routinTitle").value = null;
    document.getElementById("routin0").value = null;
    setAdd(["Add"]);
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
    document.getElementById("todoTitle").value = null;
    document.getElementById("Todo0").value = null;
    setAdd(["Add"]);
  };

  //complete task effect status
  const todoList_status = (e, ind, Todoindex) => {
    e.target.classList.add(`True_states${Todoindex}`);
    let Selected = document.querySelectorAll(`.True_states${Todoindex}`);
    for (let index = 0; index < Selected.length; index++) {
      if (Selected[index].checked === true) {
        Selected[
          index
        ].parentElement.parentElement.parentElement.childNodes[1].classList.add(
          "hide"
        );
        Selected[index].parentElement.classList.add(
          "text-decoration-line-through"
        );
        Selected[index].parentElement.parentElement.parentElement.classList.add(
          "bg-success"
        );
      } else {
        Selected[
          index
        ].parentElement.parentElement.parentElement.childNodes[1].classList.remove(
          "hide"
        );
        Selected[index].parentElement.classList.remove(
          "text-decoration-line-through"
        );
        Selected[
          index
        ].parentElement.parentElement.parentElement.classList.remove(
          "bg-success"
        );
      }
    }
  };
  //Edit_list function
  const [ChangeEditList, setChangeEditList] = useState(
    TodoList[TodoEditList[0]][TodoEditList[1]]
  );
  const EditTodofun = (e, index, Todoindex) => {
    setTodoEditList([Todoindex, index]);
    setChangeEditList(TodoList[Todoindex][index]);
    setupdate("issue");
  };
  //Edit TodoList Function
  const EditTodoList = (e) => {
    let Edit_input_value = document.getElementById("Edit_input_value").value;
    let data = TodoList;
    let Edit_Data = (data[TodoEditList[0]][
      TodoEditList[1]
    ] = Edit_input_value);
    setTodoList(data);
    localStorage.setItem("TodoTask",JSON.stringify(data))
    setupdate("All Edited ")
  };
  //Edit_onChange Value

  const Change_EditTodoList = (e) => {
    setChangeEditList(e.target.value);
  };
  // body
  return (
    <>
      <div className=" w-100 m-3 mt-3  rounded-3 bg-light home_desk">
        {/* <!-- Button trigger modal --> */}
        {/* menu Output body Container */}
        <h1 className="text-center my-2 bg-secondary rounded-2 text-light">
          {props.menuBody.TaskTitle}
        </h1>
        {props.menuBody.TaskTitle === "Routin" ? (
          <div
            className="container position-relative"
            style={{
              overflow: "auto",
            }}
          >
            <div className="row row-cols-1 row-cols-md-4 g-3 ">
              {routinList.length !== 0 ? (
                routinList.map((element, routinindex) => {
                  return (
                    <div className={update} key={routinindex}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "18rem",
                          height: "238px",
                        }}
                      >
                        <div className="card-header bg-warning d-flex px-2 py-1 justify-content-between align-items-center">
                          <span className="badge bg-secondary ">
                            {routinindex + 1}
                          </span>

                          <div className="text-muted fw-bold fs-5 ">
                            {element[0]}{" "}
                          </div>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              RoutinDeleteCard(routinindex);
                            }}
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
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
                <h4 className="text-info fw-bold">
                  {" "}
                  please create a Routin...
                </h4>
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
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {TodoList.length !== 0 ? (
                TodoList.map((element, Todoindex) => {
                  return (
                    <div className={update} key={Todoindex}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "24rem",
                          height: "238px",
                        }}
                      >
                        <div className="card-header bg-warning d-flex px-2 py-1 justify-content-between  align-items-center">
                          <span className="badge bg-secondary">
                            {Todoindex + 1}
                          </span>
                          <h5> {element[0]}</h5>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              TodoDeleteCard(Todoindex);
                            }}
                          >
                            {" "}
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                        <div
                          className="card-body text-primary p-0"
                          style={{
                            overflow: "auto",
                          }}
                        >
                          <ul className="list-group list-group-flush">
                            {element.map((element, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`list-group-item rounded-2 mt-1 ${
                                    index === 0
                                      ? ` hide `
                                      : `d-flex justify-content-between`
                                  }`}
                                >
                                  <div className="d-flex ustify-content-between align-items-center">
                                    <span className="badge bg-warning mx-2 rounded-5">
                                      {index}
                                    </span>
                                    <div className="d-flex ustify-content-between align-items-center">
                                      <input
                                        className="form-check-input me-2 border rounded-4 p-2"
                                        id={`checked${index}`}
                                        type="checkbox"
                                        onClick={(e) => {
                                          todoList_status(e, index, Todoindex);
                                        }}
                                      />
                                      <h6> {element}</h6>
                                    </div>
                                  </div>
                                  <div>
                                    {/* <!-- Button trigger modal --> */}
                                    <button
                                      type="button"
                                      className="btn p-0 "
                                      data-bs-toggle="modal"
                                      data-bs-target="#Edit_list_Modal"
                                      onClick={(e) => {
                                        EditTodofun(e, index, Todoindex);
                                      }}
                                    >
                                      <i className="bi bi-pencil-square"></i>
                                    </button>
                                  </div>
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
                <h4 className="text-info fw-bold">
                  {" "}
                  please create a TodoList...
                </h4>
              )}
            </div>
          </div>
        ) : null}
        <button
          type="button"
          className=" btn btn-warning position-absolute bottom-0 end-0 m-3 position-fixed"
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
                ) : //note
                props.menuBody.TaskTitle === "Note" ? (
                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTask1"
                        className="form-label"
                      >
                        Note Title
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="routinTitle"
                        placeholder="Write a book"
                      />
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
      </div>
      <div
        className="modal fade"
        id="Edit_list_Modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id={update}>
              <input
                className="form-control"
                id="Edit_input_value"
                type="text"
                value={ChangeEditList}
                aria-label="default input example"
                onChange={(e) => Change_EditTodoList(e)}
              />
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
                onClick={(e) => EditTodoList(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
