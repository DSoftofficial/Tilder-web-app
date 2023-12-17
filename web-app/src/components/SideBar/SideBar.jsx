import React, { useState } from 'react'

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="iconWrapper">
          <div id="filepioneer" className="sidebaricons" aria-expanded="false" aria-selected="false"><i className="fa-regular fa-file fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>
        <div className="iconWrapper">
          <div className="search sidebaricons" aria-expanded="false"><i className="fa-solid fa-magnifying-glass fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="terminal sidebaricons" aria-expanded="false"><i className="fa-solid fa-terminal fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="debug sidebaricons" aria-expanded="false"><i className="fa-solid fa-bug-slash fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="git sidebaricons" aria-expanded="false"><i className="fa-brands fa-git-alt fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="github sidebaricons" aria-expanded="false"><i className="fa-brands fa-github fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="extensions sidebaricons" aria-expanded="false"><i className="fa-solid fa-puzzle-piece fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>
      </div>
    </>
  )
}
