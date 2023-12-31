import React from 'react'

export default function Tabs(props) {
  return (
    <div className="tabswrapper">
      <div className={`tab d-${props.tabDisplay}`} >
        <center>Welcome</center>
        <button className='tabClose' onClick={props.toggleWelcomePagedisplay}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  )
}
