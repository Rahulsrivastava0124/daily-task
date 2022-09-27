import React, { useState } from "react";

export default function Home_task(props) {
  const [inputList, setInputList] = useState([{ firstName: "" }]);
//save the input data and get input value
  const inputData = () => {
    for (let index = 0; index < inputList.length; index++) {
      let data = document.getElementById(`TaskInput${index}`).value;
      console.log(data);
      let taskArr=[ ];
      taskArr.push(`${data}`)
      console.log(taskArr);
      
    }
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    console.log(list);
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "" }]);
    console.log(inputList);
    
  };

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
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.menuBody.taskHeading}
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

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    {props.menuBody.taskHeading} Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Write a book"
                  />
                </div>
                {/* task */}
                {props.menuBody.TaskTitle === "Task" ? (
                  <>
                    <h5>Task List</h5>
                    {inputList.map((x, i) => {
                      return (
                        <>
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              {i + 1}
                            </span>
                            <input
                              id={`TaskInput${i}`}
                              type="text"
                              className="form-control"
                              placeholder="Enter Task"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              value={x.listHeader}
                              onChange={(e) => handleInputChange(e, i)}
                            />

                            {inputList.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger "
                                id="button-addon2"
                                onClick={() => handleRemoveClick(i)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                className="btn btn-sm btn-primary text-center"
                                onClick={handleAddClick}
                              >
                                <i className="bi bi-plus-lg"></i>
                              </button>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : //routinTask
                props.menuBody.TaskTitle === "RoutinTask" ? (
                  <>
                    <h5 className="text-success">Routin</h5>
                    {inputList.map((x, i) => {
                      console.log(x);

                      return (
                        <>
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              {i + 1}
                            </span>
                            <input
                              id={`TaskInput${i}`}
                              type="text"
                              className="form-control"
                              placeholder="Enter Routin"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              value={x.listHeader}
                              onChange={(e) => handleInputChange(e, i)}
                            />

                            {inputList.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger "
                                id="button-addon2"
                                onClick={() => handleRemoveClick(i)}
                              >
                                <i className="bi p-2 bi-trash"></i>
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                className="btn btn-sm btn-primary text-center"
                                onClick={handleAddClick}
                              >
                                <i className="bi p-2 bi-plus-lg"></i>
                              </button>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : //todoList
                props.menuBody.TaskTitle === "TodoList" ? (
                  <>
                    <h5 className="text-success">Todo List</h5>
                    {inputList.map((x, i) => {
                      return (
                        <>
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              {i + 1}
                            </span>
                            <input
                              id={`TaskInput${i}`}
                              type="text"
                              className="form-control"
                              placeholder="Enter Todo"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              value={x.listHeader}
                              onChange={(e) => handleInputChange(e, i)}
                            />

                            {inputList.length !== 1 && (
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleRemoveClick(i)}
                                id="button-addon2"
                              >
                                <i className="bi p-2 bi-trash"></i>
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                className="btn btn-sm btn-primary text-center"
                                onClick={handleAddClick}
                              >
                                <i className="bi p-2 bi-plus-lg "></i>
                              </button>
                            )}
                          </div>
                        </>
                      );
                    })}
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
                  </>
                ) : null}
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
                  onClick={inputData}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center">{props.menuBody.TaskTitle}</h1>
      </div>
    </>
  );
}
