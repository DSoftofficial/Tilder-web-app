import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MenuBar(props) {
  function filePicker() {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
  }
  function quit() {
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
                    <div className='subdropdown-content expandable'>
                      <ul>
                        <li>Recent <FontAwesomeIcon icon="fa-solid fa-chevron-right" /></li>
                      </ul>
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
                <li>Cut</li>
                <li>Copy</li>
                <li>Paste</li>
                <li>Paste as</li>
                <hr className='dropdowncontent-hr' />
                <li>Undo</li>
                <li>Redo</li>
                <hr className='dropdowncontent-hr' />
                <li>Find</li>
                <li>Replace</li>
                <li>Find in Files</li>
                <li>Replace in Files</li>
                <hr className='dropdowncontent-hr' />
                <li>Toggle Line Comment</li>
                <li>Toggle Block Comment</li>
                <hr className='dropdowncontent-hr' />
                <li>Emmet: Expand Abbreviation</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.view}</span>
              <div className="dropdown-content">
                <li>Command Palette</li>
                <li>Open View</li>
                <hr className='dropdowncontent-hr' />
                <li>Appearance</li>
                <li>Editor Layout</li>
                <hr className='dropdowncontent-hr' />
                <li>Explorer</li>
                <li>Search</li>
                <li>Source Control</li>
                <li>Run</li>
                <li>Extensions</li>
                <li>Testing</li>
                <hr className='dropdowncontent-hr' />
                <li>Problems</li>
                <li>Output</li>
                <li>Debug Console</li>
                <li>Terminal</li>
                <hr className='dropdowncontent-hr' />
                <li>Word Wrap</li>
              </div>
            </div>
            <div className="dropdown">
              <span className='dropdown-trigger-btn'>{props.go}</span>
              <div className="dropdown-content">
                <li>Switch Editor</li>
                <li>Switch Group</li>
                <hr className='dropdowncontent-hr' />
                <li>Go to File</li>
                <li>Go to Symbol in Workspace</li>
                <hr className='dropdowncontent-hr' />
                <li>Go to Symbol in Editor</li>
                <li>Go to Definition</li>
                <li>Go to Declaration</li>
                <li>Go to Type Definition</li>
                <li>Go to Implementations</li>
                <li>Go to References</li>
                <hr className='dropdowncontent-hr' />
                <li>Go to Line/Column</li>
                <li>Go to Bracket</li>
                <hr className='dropdowncontent-hr' />
                <li>Next Problem</li>
                <li>Previous Problem</li>
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