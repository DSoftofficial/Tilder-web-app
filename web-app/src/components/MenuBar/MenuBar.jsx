import React from 'react'
import PropTypes from 'prop-types'


function MenuBar(props) {
  return (
    <>
      <header>
        <nav>
          <div id="header_icon">
            <img src="/Tilder_icon.png" alt="tilder_icon_header" aria-label='Tilder' />
          </div>
          <div className="navigation">
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.file}</span>
              </div>
              <div className="dropdown-content">
                <a href="#">New File</a><br />
                <a href="#">New Folder</a><br />
                <a href="#">New Window</a><br />
                <a href="#">New Tab</a><br />
                <hr className='dropdowncontent-hr' />
                <a href="#">Open File</a><br />
                <a href="#">Open Folder</a><br />
                <a href="#">Open Recent</a><br />
                <hr className='dropdowncontent-hr' />
                <a href="#">Edit</a><br />
                <a href="#">Edit recent file</a><br />
                <a href="#">Edit file temporarily</a><br />
                <hr className='dropdowncontent-hr' />
                <a href="#">Save</a><br />
                <a href="#">Save as</a><br />
                <a href="#">Change Save's root directory</a><br />
                <hr className='dropdowncontent-hr' />
                <a onClick={window.close()}>Quit Editor</a><br />


              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.edit}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.view}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.go}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.run}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.debug}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.print}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.shell}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.keys}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.help}</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MenuBar;

MenuBar.defaultProps = {
  file: "File",
  edit: "Edit",
  view: "View",
  go: "Go",
  run: "Run",
  debug: "Debug",
  print: "Print",
  shell: "Shell",
  keys: "Keys",
  help: "Help"
}