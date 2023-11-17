import React, { useState } from 'react'
import ReactDOM from "react-dom";

export default function SideBar(props) {
  const sidebarscontent = document.getElementsByClassName('sidebarscontent')
  const MonacoEditor = document.getElementById('editorwrapper')
  let Search = document.getElementById('searcharea')
  let Extensions = document.getElementById('extensions')
  let Debug = document.getElementById('debug')
  let CodeBlocks = document.getElementById('codeblocks')
  let Github = document.getElementById('github')
  let Git = document.getElementById('git')
  let Terminal = document.getElementById('terminal')
  let filepioneer = document.getElementById('filepioneer');
  const toggleSearch = () => {
    console.log("toggled")
    if (Search.style.display === "none") {
      Search.style.display = "flex";
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      filepioneer.style.display = "none";
      MonacoEditor.style.width = "72vw";
    } else {
      Search.style.display = "none"
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      filepioneer.style.display = "none";
      MonacoEditor.style.width = "92vw";
    }
  }

  const toggleExtensions = () => {
    console.log("toggled")
    if (Search.style.display === "none") {
      Search.style.display = "flex";
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      filepioneer.style.display = "none";
      MonacoEditor.style.width = "72vw";
    } else {
      Search.style.display = "none"
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      filepioneer.style.display = "none";
      MonacoEditor.style.width = "92vw";
    }
  }
  const toggleFilePioneer = () => {
    console.log("toggled")
    if (filepioneer.style.display === "none") {
      filepioneer.style.display = "flex";
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      Search.style.display = "none"
      MonacoEditor.style.width = "72vw";
    } else {
      Extensions.style.display = "none";
      // Debug.style.display = "none";
      // CodeBlocks.style.display = "none";
      // Github.style.display = "none";
      // Git.style.display = "none";
      Search.style.display = "none"
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
          <div className="search sidebaricons" onClick={toggleSearch}><i className="fa-solid fa-magnifying-glass fa-xl"></i></div>
          <span className="sidebarIconBar"></span>
        </div>

        <div className="iconWrapper">
          <div className="terminal sidebaricons" onClick={toggleExtensions}><i className="fa-solid fa-terminal fa-xl"></i></div>
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
