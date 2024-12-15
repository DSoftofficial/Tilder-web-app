import React from 'react'

export default function Tabs(props) {
  return (
    <div className={`tabswrapper d-${props.TabsWrapperDisplay}`}>
      <div className={`tab d-${props.WelcomeTabDisplay}`}>
        <center>Welcome</center>
        <button className='tabClose' onClick={props.toggleWelcomePagedisplay}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {Array.from({ length: props.tabCount }, (_, index) => (
        <div key={index} className={`tab d-${props.TabDisplay}`}>
          <center>{props.fileName}</center>
          <button className='tabClose' onClick={props.toggleWelcomePagedisplay}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
      ))}
    </div>
  )
}