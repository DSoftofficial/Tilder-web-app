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
              <span className='dropdown-trigger-btn'>{props.file}</span>
              <div className="dropdown-content">
                <ul>
                  <li aria-label='New File (Ctrl + N)'>New File</li>
                  <li aria-label=''>New Folder</li>
                  <li aria-label=''>New Window</li>
                  <li aria-label=''>New Tab</li>
                  <hr className='dropdowncontent-hr' />
                  <li onClick={filePicker} aria-label=''>Open File</li>
                  <li aria-label=''>Open Folder</li>
                  <div className="subdropdown">
                    <li>Open Recent</li>
                    <div className='subdropdown-content'>
                      <li>Recent <i class="fa-solid fa-chevron-right" className='rightarrow'></i></li>
                    </div>
                  </div>
                  <hr className='dropdowncontent-hr' />
                  <li aria-label=''>Edit</li>
                  <li aria-label=''>Edit recent file</li>
                  <li aria-label=''>Edit file temporarily</li>
                  <hr className='dropdowncontent-hr' />
                  <li aria-label=''>Save</li>
                  <li aria-label=''>Save as</li>
                  <li aria-label=''>Change Save's root directory</li>
                  <hr className='dropdowncontent-hr' />
                  <li onClick={quit} aria-label=''>Quit Editor</li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.edit}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.view}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.go}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.run}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.debug}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.print}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.shell}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.keys}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.help}</span>
              <div className="dropdown-content">
                <li>New File</li>
              </div>
            </div>
          </div>
        </nav >
      </header >
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