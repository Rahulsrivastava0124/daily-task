import React from "react";
import Menu from "./Menu";
import HomeTask from "./Home_inputs";

export default function Note(props) {
  return (
    <div>
      <div className="d-flex flex-row ">
        <Menu color={props.color} text={props.darkLight} />
        <HomeTask color={props.color} menuBody={props.menuBody} />
      </div>
    </div>
  );
}
