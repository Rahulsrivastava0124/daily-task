import React, { useState } from "react";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import RoutinTask from "./Component/RoutinTask";
import TodoList from "./Component/TodoList";
import Note from "./Component/Note";
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
            <RoutinTask
              color={color}
              menuBody={{ TaskTitle: "Routine"}}
            />
          }
        ></Route>
        <Route
          path="/Home/TodoList"
          element={
            <TodoList
              color={color}
              menuBody={{ TaskTitle: "TodoList" }}
            />
          }
        ></Route>
        <Route
          path="/Home/Note"
          element={
            <Note
              color={color}
              menuBody={{ TaskTitle: "Note" }}
            />
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
