import React, { useState } from "react";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import RoutinTask from "./Component/RoutinTask";
import TodoList from "./Component/TodoList";
import Note from "./Component/Note";
import Setting from "./Component/Setting";
import More from "./Component/More";
import AboutUs from "./Component/AboutUs";
import Portfolio from "./Component/Portfolio";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [darkLight, setdarkLight] = useState("dark");
  const [color, setColor] = useState({ bg: "light", text: "dark" });
  const colorMode_dark = (e) => {
    if (color.bg === "dark") {
      setColor({ bg: "light", text: "dark" });
      setdarkLight("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setColor({ bg: "dark", text: "light" });
      setdarkLight("light");
      document.body.style.backgroundColor = "#000000ba";
    }
  };
  return (
    <>
      <Navber
        color={color}
        darkLight={darkLight}
        colorMode_dark={colorMode_dark}
      />
      <Routes>
        <Route path="/SignUp" element={<SignUp color={color} />}></Route>
        <Route path="/Login" element={<Login color={color} />}></Route>
        <Route
          path="/"
          element={
            <Home
              color={color}
              menuBody={{ TaskTitle: "Task", taskHeading: "Task" }}
            />
          }
        ></Route>
        <Route
          path="/Home/RoutinTask"
          element={
            <RoutinTask
              color={color}
              menuBody={{ TaskTitle: "RoutinTask", taskHeading: "RoutinTask" }}
            />
          }
        ></Route>
        <Route
          path="/Home/TodoList"
          element={
            <TodoList
              color={color}
              menuBody={{ TaskTitle: "TodoList", taskHeading: "TodoList" }}
            />
          }
        ></Route>
        <Route
          path="/Home/Note"
          element={
            <Note
              color={color}
              menuBody={{ TaskTitle: "Note", taskHeading: "Note" }}
            />
          }
        ></Route>
        <Route
          path="/Home/Setting"
          element={
            <Setting color={color} menuBody={{ TaskTitle: "Setting" }} />
          }
        ></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/More" element={<More />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
      </Routes>
      <Footer color={color} />
    </>
  );
}
