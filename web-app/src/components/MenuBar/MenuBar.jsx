import React, { useState } from 'react'
import PropTypes from 'prop-types'


function MenuBar(props) {
  const filePicker = () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
  }
  const quit = () => {
    window.close()
  }
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
                <li>New File</li>
                <li>New Folder</li>
                <li>New Window</li>
                <li>New Tab</li>
                <hr className='dropdowncontent-hr' />
                <li onClick={filePicker}>Open File</li>
                <li>Open Folder</li>
                <li>Open Recent</li>
                <hr className='dropdowncontent-hr' />
                <li>Edit</li>
                <li>Edit recent file</li>
                <li>Edit file temporarily</li>
                <hr className='dropdowncontent-hr' />
                <li>Save</li>
                <li>Save as</li>
                <li>Change Save's root directory</li>
                <hr className='dropdowncontent-hr' />
                <li onClick={quit}>Quit Editor</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.edit}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.view}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.go}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.run}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.debug}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.print}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.shell}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.keys}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>{props.help}</span>
              </div>
              <div className="dropdown-content">
                <li>New File</li>
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

MenuBar.propTypes = {
  file: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  go: PropTypes.string.isRequired,
  run: PropTypes.string.isRequired,
  debug: PropTypes.string.isRequired,
  print: PropTypes.string.isRequired,
  shell: PropTypes.string.isRequired,
  keys: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired
}