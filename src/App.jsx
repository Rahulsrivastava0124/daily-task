import React, { useState } from "react";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";

export default function App() {
  const [darkLight, setdarkLight] = useState("dark");
  const [color, setColor] = useState({ bg: "light", text: "dark" });

  const colorMode_dark = (e) => {
    if (color.bg === "dark") {
      setColor({ bg: "light", text: "dark" });
      setdarkLight("dark");
      document.body.style.backgroundColor="white";
    } else {
      setColor({ bg: "dark", text: "light" });
      setdarkLight("light");
      document.body.style.backgroundColor="#000000ba";
    }
  };
  return (
    <div>
      <Navber
        color={color}
        darkLight={darkLight}
        colorMode_dark={colorMode_dark}
      />
      <SignUp color={color}  />
      <Login color={color}  />
      <Footer color={color}  />
    </div>
  );
}
