import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
  const [AddTodolistvalueInCard, setAddTodolistvalueInCard] = useState("null");
  const [AddroutinlistNoInCard, setAddroutinlistNoInCard] = useState(0);
  const [AddroutinlistvalueInCard, setAddroutinlistvalueInCard] =
    useState("null");
  const [TodoEditList, setTodoEditList] = useState([0, 0]);
  const CardColor = [
    "#e39bd3",
    "#98fed6",
    "#f69b88",
    "#72b2e1",
    "#f8ffb6",
    "#cda293",
    "#dad88a",
    "#8ab69a",
    "#fff8d1",
    "#bddfcd",
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
    toast.warning("Card deleted");
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
    myarr.push(new Date().toDateString());
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
    toast.success("New Card saved");
  };

  //complete task list  effect status
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
        Selected[
          index
        ].parentElement.parentElement.parentElement.childNodes[1].classList.remove(
          "d-flex"
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
           Selected[
             index
           ].parentElement.parentElement.parentElement.childNodes[1].classList.add(
             "d-flex"
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
    if (Edit_input_value !=='') {
      let data = TodoList;
      let Edit_Data = (data[TodoEditList[0]][TodoEditList[1]] =
        Edit_input_value);
      localStorage.setItem("TodoTask", JSON.stringify(data));
      setupdate("All Edited ");
      toast.success("Edited Success");
    } else {
      toast.error("input filled is null");
    }
  };
  // Todo Edit_onChange Value
  const Change_EditTodoList = (e) => {
    setChangeEditList(e.target.value);
  };

  // Routin Add Card list Item Function
  const RoutinSaveAddCardList = (e) => {
    let DataValue = routinList;
    if (AddroutinlistvalueInCard !== '') {
      DataValue[AddroutinlistNoInCard].splice(
        DataValue[AddroutinlistNoInCard].length - 1,
        0,
        AddroutinlistvalueInCard
      );
      localStorage.setItem("RoutinTask", JSON.stringify(DataValue));
      setupdate("routin new list set");
      toast.success("New list is Add");
    } else {
      toast.error("input Filled is null");
    }
  };

  // Todo Add Card list Item Function
  const SaveAddCardList = (e) => {
    let DataValue = TodoList;
    if (AddTodolistvalueInCard !== '') {
      DataValue[AddTodolistNoInCard].splice(
        DataValue[AddTodolistNoInCard].length - 1,
        0,
        AddTodolistvalueInCard
      );
      localStorage.setItem("TodoTask", JSON.stringify(DataValue));
      setupdate(" new list set");
      toast.success("New list is Add");
    } else {
      toast.error("input Filled is null");
    }
  };
  //onchange value in  add list in card function
  const RoutinAddListInCardOnChange = (e) => {
    setAddroutinlistvalueInCard(e.target.value);
  };
  const TodoAddListInCardOnChange = (e) => {
    setAddTodolistvalueInCard(e.target.value);
  };
  //Todo Card list Delete Function
const deleteTodoListFun=()=>{
  console.log(TodoEditList);

  todostorage[TodoEditList[0]].splice(TodoEditList[1], 1);
  setTodoList(todostorage);
  let Deleted_data_set_local = JSON.stringify(todostorage);
  localStorage.setItem("TodoTask", Deleted_data_set_local);
  setupdate("Remove_list_in_card")
  toast.success("List Removed")
}
console.log(props);

  // body
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={` w-100 m-1 mt-2  rounded-3 bg-${props.color.bg} text-${props.color.text} home_desk `}>
        {/* <!-- Button trigger modal --> */}
        {/* menu Output body Container */}
        <h1 className="text-center my-2 mx-2 bg-secondary rounded-2 text-light">
          {props.menuBody.TaskTitle}
        </h1>
        {props.menuBody.TaskTitle === "Routine" ? (
          <div
            className="container position-relative"
            style={{
              overflow: "auto",
            }}>
            <div className="row row-cols-1 row-cols-md-4 g-3 ">
              {routinList.length !== 0 ? (
                routinList.map((routinelement, routinindex) => {
                  return (
                    <div className={update} key={routinindex}>
                      <div
                        className="card border mb-3"
                        style={{
                          maxWidth: "18rem",
                          height: "260px",
                        }}>
                        <div
                          className={`card-header bg-${
                            CardColor[Math.floor(Math.random() * 6)]
                          } text-black d-flex px-2 py-1 justify-content-between align-items-center`}>
                          <span className="badge bg-secondary ">
                            {routinindex + 1}
                          </span>

                          <div className="fw-bold fs-5 ">
                            {routinelement[0]}{" "}
                          </div>
                          <button
                            className="btn "
                            onClick={() => {
                              RoutinDeleteCard(routinindex);
                            }}>
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                        <div
                          className="card-body text-primary"
                          style={{
                            overflow: "auto",
                          }}>
                          <ul className="list-group list-group-flush">
                            {routinelement.map((element, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`list-group-item rounded-2 mt-1 ${
                                    index === 0
                                      ? ` hide `
                                      : index === routinelement.length - 1
                                      ? ` hide `
                                      : `d-flex justify-content-between`
                                  }`}>
                                  {element}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div
                          className="card-footer d-flex align-items-center justify-content-between"
                          style={{
                            backgroundColor: `${CardColor[routinindex]}`,
                          }}>
                          <small className="text-muted fw-bold">
                            {routinelement[routinelement.length - 1]}
                          </small>
                          <button
                            type="button"
                            className="btn p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#routin_card_list_Add_Model"
                            onClick={(e) =>
                              setAddroutinlistNoInCard(routinindex)
                            }>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-plus-square-fill"
                              viewBox="0 0 16 16">
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
            }}>
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
                        }}>
                        <div
                          className="card-header  text-black d-flex px-2 py-1 justify-content-between align-items-center"
                          style={{
                            backgroundColor: `${CardColor[Todoindex]}`,
                          }}>
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
                            }}>
                            {" "}
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                        <div
                          className="card-body text-primary p-0"
                          style={{
                            overflow: "auto",
                          }}>
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
                                  }`}>
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
                                  <div className="d-flex">
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
                                      }}>
                                      <i className="bi bi-pencil-square text-info"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn p-0 mx-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalChoice "
                                      data-bs-placement="top"
                                      title="Delete list"
                                      onClick={(e) => {
                                        EditTodofun(e, index, Todoindex);
                                      }}>
                                      <i className="bi bi-journal-x text-danger"></i>
                                    </button>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div
                          className="card-footer d-flex align-items-center justify-content-between"
                          style={{
                            backgroundColor: `${CardColor[Todoindex]}`,
                          }}>
                          <small className="text-muted fw-bold">
                            {Todoelement[Todoelement.length - 1]}
                          </small>
                          <button
                            type="button"
                            className="btn p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#card_list_Add_Model"
                            onClick={(e) => setAddTodolistNoInCard(Todoindex)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              className="bi bi-plus-square-fill"
                              viewBox="0 0 16 16">
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
          data-bs-target="#exampleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16">
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
          aria-hidden="true">
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
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Modal body */}
                {
                  //routinTask
                  props.menuBody.TaskTitle === "Routin" ? (
                    <>
                      <div className=" mb-3">
                        <label
                          htmlFor="exampleFormControlTask1"
                          className="form-label">
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
                          className="form-label my-2">
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
                                  onClick={() => handelRemove(index)}>
                                  <i className="bi bi-trash"></i>
                                </button>
                              )}
                              {add.length - 1 === index && (
                                <button
                                  className="btn btn-sm btn-primary mx-1 "
                                  onClick={() => handelAdd(index)}>
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
                          data-bs-dismiss="modal">
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={saveHandelRoutin}>
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
                          className="form-label">
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
                          className="form-label my-2">
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
                                  onClick={() => handelRemove(index)}>
                                  <i className="bi bi-trash"></i>
                                </button>
                              )}
                              {add.length - 1 === index && (
                                <button
                                  className="btn btn-sm btn-primary mx-1"
                                  onClick={() => handelAdd(index)}>
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
                          data-bs-dismiss="modal">
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={saveHandelTodo}>
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
                          className="form-label">
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
                          className="form-label">
                          Note textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"></textarea>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal">
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
                  ) : null
                }
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
        aria-hidden="true">
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
                  data-bs-dismiss="modal">
                  <i className="bi bi-x-lg">Close</i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={(e) => EditTodoList(e)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16">
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
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className=" d-flex " id={update}>
              <input
                className="form-control m-3"
                id="Edit_input_value"
                type="text"
                aria-label="default input example"
                onChange={(e) => TodoAddListInCardOnChange(e)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal">
                  <i className="bi bi-x-lg">Close</i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={SaveAddCardList}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16">
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
        id="routin_card_list_Add_Model"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className=" d-flex " id={update}>
              <input
                className="form-control m-3"
                id="Edit_input_value"
                type="text"
                aria-label="default input example"
                onChange={(e) => RoutinAddListInCardOnChange(e)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal">
                  <i className="bi bi-x-lg">Close</i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={RoutinSaveAddCardList}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16">
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
        className="modal "
        tabIndex="-1"
        role="dialog"
        id="modalChoice"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog " role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-body text-center">
              <h5 className="mb-0">Delete Card List</h5>
              <p className="mb-0">Are you Sure</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"
                onClick={deleteTodoListFun}
                data-bs-dismiss="modal">
                <strong>Yes, delete</strong>
              </button>
              <button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                data-bs-dismiss="modal">
                No thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
