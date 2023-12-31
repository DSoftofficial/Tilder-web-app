import React, { useState } from "react";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import MonacoEditor from "./components/Editor/MonacoEditor.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import ReviewBar from "./components/ReviewBar/ReviewBar.jsx";
import StatusBar from "./components/StatusBar/StatusBar.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import Search from "./components/SideBar/Main Components/Search/Search.jsx";
import Extensions from "./components/SideBar/Main Components/Extensions/Extensions.jsx";
import FilePioneer from "./components/SideBar/Main Components/filePioneer/filePioneer.jsx";
import GitHub from "./components/SideBar/Main Components/GItHub/GitHub.jsx";
import Terminal from "./components/SideBar/Main Components/Terminal/Terminal.jsx";
import Debug from "./components/SideBar/Main Components/Debug/Debug.jsx";
import CodeBlocks from "./components/SideBar/Main Components/Code Blocks/CodeBlocks.jsx";
import Git from "./components/SideBar/Main Components/Git/Git.jsx";

function App(props) {
  let [ariaExpandedisplayfilepioneer, changeariaExpandedisplayfilepioneer] = useState('none');
  let [ariaExpandedisplaysearch, changeariaExpandedisplaysearch] = useState('none');
  let [ariaExpandedisplaycodeblocks, changeariaExpandedisplaycodeblocks] = useState('none');
  let [ariaExpandedisplaydebug, changeariaExpandedisplaydebug] = useState('none');
  let [ariaExpandedisplayextensions, changeariaExpandedisplayextensions] = useState('none');
  let [ariaExpandedisplaygit, changeariaExpandedisplaygit] = useState('none');
  let [ariaExpandedisplaygithub, changeariaExpandedisplaygithub] = useState('none');
  let [ariaExpandedisplayterminal, changeariaExpandedisplayterminal] = useState('none');
  const [TabDisplay, setTabDisplay] = useState('flex')
  const [WelcomePageDisplay, setWelcomePageDisplay] = useState('flex')
  const toggleWelcomePageDisplay = () => {
    console.log("clicked");
    setTabDisplay('none');
    setWelcomePageDisplay('none');
  };
  const toggleAriaExpandedfilepioneer = () => {
    console.log("clicked");
    if (ariaExpandedisplayfilepioneer === "none") {
      // console.log("toggled")
      changeariaExpandedisplayfilepioneer("flex");
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedsearch = () => {
    console.log("clicked");
    if (ariaExpandedisplaysearch === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("flex");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedcodeblocks = () => {
    console.log("clicked");
    if (ariaExpandedisplaycodeblocks === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("flex");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedgithub = () => {
    console.log("clicked");
    if (ariaExpandedisplaygithub === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("flex");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedgit = () => {
    console.log("clicked");
    if (ariaExpandedisplaygit === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("flex");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedebug = () => {
    console.log("clicked");
    if (ariaExpandedisplaydebug === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("flex");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedterminal = () => {
    console.log("clicked");
    if (ariaExpandedisplayterminal === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("flex");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const toggleAriaExpandedextensions = () => {
    console.log("clicked");
    if (ariaExpandedisplayextensions === "none") {
      // console.log("toggled")
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("flex");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '72vw',
      })
    }
    else {
      changeariaExpandedisplaysearch("none");
      changeariaExpandedisplayfilepioneer("none");
      changeariaExpandedisplaycodeblocks("none");
      changeariaExpandedisplaydebug("none");
      changeariaExpandedisplayextensions("none");
      changeariaExpandedisplaygit("none");
      changeariaExpandedisplaygithub("none");
      changeariaExpandedisplayterminal("none");
      changeinsidemaincodeareaStyle({
        width: '92vw',
      })
    }
  };
  const [insidemaincodeareaStyle, changeinsidemaincodeareaStyle] = useState({
    width: '92vw',
    height: '83.5vh'
  })
  return (
    <>
      <MenuBar />
      <div className="mainsect">
        <div className="codewrpr">
          <ReviewBar />
          <div className="maincodearea">
            <Tabs tabDisplay={TabDisplay} toggleWelcomePagedisplay={toggleWelcomePageDisplay} />
            <MonacoEditor style={insidemaincodeareaStyle} />
            <div className={`welcomePage d-${WelcomePageDisplay}`} style={insidemaincodeareaStyle}>
              <div className="welcomePageSection">
                <h1>Welcome back to Tilder!</h1>
                <p>Code like a pro!</p>
              </div>
              <div className="welcomePageSection">
                <h2>Important Links</h2>
                <div id="importantLinks">
                  <a href="https://github.com" className="linkto" target="_blank">
                    <div className="link">
                      <div className="link-icon">
                        <i className="fa-brands fa-github fa-2xl"></i>
                      </div>
                      <div className="link-content">
                        <h4>Github</h4>
                        <p>Host your code!</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.youtube.com" className="linkto" target="_blank">
                    <div className="link">
                      <div className="link-icon">
                        <i className="fa-brands fa-youtube fa-2xl"></i>
                      </div>
                      <div className="link-content">
                        <h4>Youtube</h4>
                        <p>Watch Videos!</p>
                      </div>
                    </div>
                  </a>
                  <a href="" className="linkto" target="_blank">
                    <div className="link">
                      <div className="link-icon">
                      </div>
                      <div className="link-content">
                        <h4>DSoft</h4>
                        <p>Explore our other products.</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://stackoverflow.com" className="linkto" target="_blank">
                    <div className="link">
                      <div className="link-icon">
                        <i className="fa-brands fa-stack-overflow fa-2xl"></i>
                      </div>
                      <div className="link-content">
                        <h4>Stack Overflow</h4>
                        <p>Fix your problem!</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SideBarmainwrper">
          <div className="SideBarmainwrper">
            <CodeBlocks ariaExpandedisplaycodeblocks={ariaExpandedisplaycodeblocks} />
            <Terminal ariaExpandedisplayterminal={ariaExpandedisplayterminal} />
            <Git ariaExpandedisplaygit={ariaExpandedisplaygit} />
            <Extensions ariaExpandedisplayextensions={ariaExpandedisplayextensions} />
            <GitHub ariaExpandedisplaygithub={ariaExpandedisplaygithub} />
            <Debug ariaExpandedisplaydebug={ariaExpandedisplaydebug} />
            <Search ariaExpandedisplaysearch={ariaExpandedisplaysearch} />
            <FilePioneer ariaExpandedisplayfilepioneer={ariaExpandedisplayfilepioneer} />
            <SideBar toggleAriaExpandedfilepioneer={toggleAriaExpandedfilepioneer} toggleAriaExpandedsearch={toggleAriaExpandedsearch} toggleAriaExpandedextensions={toggleAriaExpandedextensions} toggleAriaExpandedterminal={toggleAriaExpandedterminal} toggleAriaExpandedebug={toggleAriaExpandedebug} toggleAriaExpandedgit={toggleAriaExpandedgit} toggleAriaExpandedgithub={toggleAriaExpandedgithub} toggleAriaExpandedcodeblocks={toggleAriaExpandedcodeblocks} />
          </div>
        </div>
      </div>
      <StatusBar />
    </>
  );
}

export default App;