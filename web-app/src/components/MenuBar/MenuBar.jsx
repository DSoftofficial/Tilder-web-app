import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function MenuBar(props) {
  function quit() {
    window.close();
  }

  return (
    <>
      <header>
        <nav>
          <div id="sidebarControls">
            <div id="header_icon">
              <img
                src="/Tilder_icon.png"
                alt="tilder_icon_header"
                aria-label="Tilder"
              />
            </div>
            <div className="navigation">
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.file}</span>
                <div className="dropdown-content">
                  <ul>
                    <li aria-label="New File (Ctrl + N)" onClick={props.triggerNewFile}>New File</li>
                    <li aria-label="">New Folder</li>
                    <li aria-label="">New Window</li>
                    <li aria-label="">New Tab</li>
                    <hr className="dropdowncontent-hr" />
                    <p className="form" id="open_file_form_navbar">
                      <label className="add-photo-btn">Open File<input type="file" id="myfile" name="myfile" onChange={props.handleFileChange} />
                      </label>
                    </p>
                    <li aria-label="">Open Folder</li>
                    <div className="subdropdown">
                      <li>Open Recent</li>
                      <div className="subdropdown-content expandable">
                        <ul>
                          <li>
                            Recent
                            <i className="fa-solid fa-chevron-right"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="dropdowncontent-hr" />
                    <li aria-label="">Edit</li>
                    <li aria-label="">Edit recent file</li>
                    <li aria-label="">Edit file temporarily</li>
                    <hr className="dropdowncontent-hr" />
                    <li aria-label="">Save</li>
                    <li aria-label="">Save as</li>
                    <li aria-label="">Change Save's root directory</li>
                    <hr className="dropdowncontent-hr" />
                    <li onClick={quit} aria-label="">
                      Quit Editor
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.edit}</span>
                <div className="dropdown-content">
                  <li>Cut</li>
                  <li>Copy</li>
                  <li>Paste</li>
                  <li>Paste as</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Undo</li>
                  <li>Redo</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Find</li>
                  <li>Replace</li>
                  <li>Find in Files</li>
                  <li>Replace in Files</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Toggle Line Comment</li>
                  <li>Toggle Block Comment</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Lligence: Expand Abbreviation</li>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.view}</span>
                <div className="dropdown-content">
                  <li>Command Palette</li>
                  <li>Open View</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Appearance</li>
                  <li>Editor Layout</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Explorer</li>
                  <li>Search</li>
                  <li>Source Control</li>
                  <li>Run</li>
                  <li>Extensions</li>
                  <li>Testing</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Problems</li>
                  <li>Output</li>
                  <li>Debug Console</li>
                  <li>Terminal</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Word Wrap</li>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.go}</span>
                <div className="dropdown-content">
                  <li>Switch Editor</li>
                  <li>Switch Group</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Go to File</li>
                  <li>Go to Symbol in Workspace</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Go to Symbol in Editor</li>
                  <li>Go to Definition</li>
                  <li>Go to Declaration</li>
                  <li>Go to Type Definition</li>
                  <li>Go to Implementations</li>
                  <li>Go to References</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Go to Line/Column</li>
                  <li>Go to Bracket</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Next Problem</li>
                  <li>Previous Problem</li>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.run_debug}</span>
                <div className="dropdown-content">
                  <li>Start Debugging</li>
                  <li>Run Without Debugging</li>
                  <li>Stop Debugging</li>
                  <li>Restart Debugging</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Open Configuration</li>
                  <li>Add Configuration</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Step Over</li>
                  <li>Step Into</li>
                  <li>Step Out</li>
                  <li>Continue</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Toggle Breakpoint</li>
                  <li>New Breakpoint</li>
                  <li>Enable All Breakpoints</li>
                  <li>Disable All Breakpoints</li>
                  <li>Remove All Breakpoints</li>
                </div>
              </div>

              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.print}</span>
                <div className="dropdown-content">
                  <li>Print Current file</li>
                  <li>Choose File...</li>
                  <hr className="dropdowncontent-hr" />
                  <li>Print Selected Lines</li>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.shell}</span>
                <div className="dropdown-content">
                  <li>New Shell</li>
                </div>
              </div>

              <div className="dropdown">
                <span className="dropdown-trigger-btn">{props.help}</span>
              </div>
            </div>
          </div>
          <div id="sidebarSettings">
            <span className="dropdown-trigger-btn" onClick={props.toggleInfoDisplay}>
              <i className="fa-solid fa-circle-info"></i>
            </span>
            <span className="dropdown-trigger-btn">
              <i className="fa-solid fa-sliders"></i>
            </span>
            <span className="dropdown-trigger-btn">
              <i className="fa-regular fa-user"></i>
            </span>
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
  run_debug: "Run & Debug",
  print: "Print",
  shell: "Shell",
  keys: "Keys",
  help: "Help",
};

MenuBar.propTypes = {
  file: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  go: PropTypes.string.isRequired,
  run_debug: PropTypes.string.isRequired,
  print: PropTypes.string.isRequired,
  shell: PropTypes.string.isRequired,
  keys: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
};
