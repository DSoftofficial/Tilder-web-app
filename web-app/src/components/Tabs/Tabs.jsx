import React from 'react'

export default function Tabs(props) {
  return (
    <div className="tabswrapper">
        <div className={`tab d-${props.tabDisplay}`}>
          <center>Welcome</center>
          <i className="fa-solid fa-xmark" onClick={props.toggleWelcomePageDisplay}></i>
        </div>
    </div>
  )
}
