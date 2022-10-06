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
  const [AddTodolistNoInCard, setAddTodolistNoInCard] = useState(0);
  const [AddTodolistvalueInCard, setAddTodolistvalueInCard] = useState("value");
  const [TodoEditList, setTodoEditList] = useState([0, 0]);
  const CardColor = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
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
    myarr.push(new Date().toDateString());
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
  let ChangeList =
    TodoList === null ? TodoList[TodoEditList[0]][TodoEditList[1]] : "issue";

  const [ChangeEditList, setChangeEditList] = useState(ChangeList);
  const EditTodofun = (e, index, Todoindex) => {
    setTodoEditList([Todoindex, index]);
    setChangeEditList(TodoList[Todoindex][index]);
    setupdate("issue");
  };
  //Edit TodoList Function
  const EditTodoList = (e) => {
    let Edit_input_value = document.getElementById("Edit_input_value").value;
    let data = TodoList;
    let Edit_Data = (data[TodoEditList[0]][TodoEditList[1]] = Edit_input_value);
    localStorage.setItem("TodoTask", JSON.stringify(data));
    setupdate("All Edited ");
  };
  // Todo Edit_onChange Value
  const Change_EditTodoList = (e) => {
    setChangeEditList(e.target.value);
  };

  // Todo Add Card list Item Function
  const SaveAddCardList = (e) => {
    let DataValue = TodoList;
    DataValue[AddTodolistNoInCard].splice(
      DataValue[AddTodolistNoInCard].length - 1,
      0,
      AddTodolistvalueInCard
    );
    localStorage.setItem("TodoTask", JSON.stringify(DataValue));
    setupdate(" new list set");
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
                          height: "260px",
                        }}
                      >
                        <div
                          className={`card-header bg-${
                            CardColor[Math.floor(Math.random() * 6)]
                          } text-black d-flex px-2 py-1 justify-content-between align-items-center`}
                        >
                          <span className="badge bg-secondary ">
                            {routinindex + 1}
                          </span>

                          <div className="fw-bold fs-5 ">{element[0]} </div>
                          <button
                            className="btn "
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
                TodoList.map((Todoelement, Todoindex) => {
                  return (
                    <div className={update} key={Todoindex}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "24rem",
                          height: "280px",
                        }}
                      >
                        <div
                          className="card-header  text-black d-flex px-2 py-1 justify-content-between align-items-center"
                          style={{ backgroundColor: `${CardColor[Todoindex]}` }}
                        >
                          <span className="badge bg-secondary">
                            {Todoindex + 1}
                          </span>
                          <h5> {Todoelement[0]}</h5>
                          <button
                            className="btn"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit List"
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
                            {Todoelement.map((element, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`list-group-item rounded-2 mt-1 ${
                                    index === 0
                                      ? ` hide `
                                      : index === Todoelement.length - 1
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
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="TodoList completed or not"
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
                                      data-bs-target="#Edit_list_Modal "
                                      data-bs-placement="top"
                                      title="Edit List value"
                                      onClick={(e) => {
                                        EditTodofun(e, index, Todoindex);
                                      }}
                                    >
                                      <i className="bi bi-pencil-square text-danger"></i>
                                    </button>
                                    
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div
                          className="card-footer d-flex align-items-center justify-content-between"
                          style={{ backgroundColor: `${CardColor[Todoindex]}` }}
                        >
                          <small className="text-muted fw-bold">
                            {Todoelement[Todoelement.length - 1]}
                          </small>
                          <button
                            type="button"
                            className="btn p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#card_list_Add_Model"
                            onClick={(e) => setAddTodolistNoInCard(Todoindex)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-plus-square-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                            </svg>
                          </button>
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
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className=" d-flex " id={update}>
              <input
                className="form-control m-3"
                id="Edit_input_value"
                type="text"
                value={ChangeEditList}
                aria-label="default input example"
                onChange={(e) => Change_EditTodoList(e)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  <i className="bi bi-x-lg">Close</i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={(e) => EditTodoList(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"></path>
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="card_list_Add_Model"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className=" d-flex " id={update}>
              <input
                className="form-control m-3"
                id="Edit_input_value"
                type="text"
                aria-label="default input example"
                onChange={(e) => setAddTodolistvalueInCard(e.target.value)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  <i className="bi bi-x-lg">Close</i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={SaveAddCardList}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"></path>
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
