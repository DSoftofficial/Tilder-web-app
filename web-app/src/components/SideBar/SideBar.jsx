import React from 'react'

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="iconWrapper">
          <div className="fileexplorer sidebaricons"><i className="fa-regular fa-file fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="search sidebaricons"><i className="fa-solid fa-magnifying-glass fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="terminal sidebaricons"><i className="fa-solid fa-terminal fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="debug sidebaricons"><i className="fa-solid fa-bug-slash fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="git sidebaricons"><i className="fa-brands fa-git-alt fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="github sidebaricons"><i className="fa-brands fa-github fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="extensions sidebaricons"><i className="fa-solid fa-puzzle-piece fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

      </div>
    </>
  )
}
