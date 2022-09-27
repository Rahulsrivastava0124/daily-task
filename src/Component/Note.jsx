import React from 'react'
import Menu from "./Menu";
import HomeTask from "./Home_task";

export default function Note(props) {
  return (
    <div>
    <div className="d-flex flex-row ">
      <Menu color={props.color} text={props.darkLight}  />
      <HomeTask menuBody={props.menuBody}/>
      </div>
    </div>
  )
}
