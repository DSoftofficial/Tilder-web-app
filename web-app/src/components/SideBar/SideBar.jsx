import React, { useState } from "react";

export default function SideBar(props) {

  return (
    <>
      <div className="sidebar">
        <div className="iconWrapper">
          <div
            id="filepioneer"
            className="sidebaricons"
            onClick={props.toggleAriaExpanded}
          >
            <i className="fa-regular fa-file fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>
        <div className="iconWrapper">
          <div id="search" className="sidebaricons">
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div id="terminal" className="sidebaricons" aria-expanded={false}>
            <i className="fa-solid fa-terminal fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div id="debug" className="sidebaricons" aria-expanded={false}>
            <i className="fa-solid  fa-bug-slash fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div id="git" className="sidebaricons" aria-expanded={false}>
            <i className="fa-brands  fa-git-alt fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div id="github" className="sidebaricons" aria-expanded={false}>
            <i className="fa-brands fa-github fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div id="codeblocks" className="sidebaricons" aria-expanded={false}>
            <i className="fa-solid fa-puzzle-piece fa-xl"></i>
          </div>
          <span className="sidebarIconBar"></span>
        </div>
      </div>
    </>
  );
}
