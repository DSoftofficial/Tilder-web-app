import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react'

export default function SideBar(props) {
  const toggleFilePioneer = () => {
    console.log("toggled")
    let filepioneer = document.getElementById('filepioneer');
    const MonacoEditor = document.getElementById('editorwrapper')
    if (filepioneer.style.display === "none") {
      filepioneer.style.display = "flex";
      MonacoEditor.style.width = "72vw";
      
    } else {
      filepioneer.style.display = "none";
      MonacoEditor.style.width = "92vw";
    }
  }
return (
  <>
    <div className="sidebar">
      <div className="iconWrapper">
        <div className="sidebaricons" onClick={toggleFilePioneer}><i className="fa-regular fa-file fa-xl"></i></div>
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
