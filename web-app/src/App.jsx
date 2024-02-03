import React, { useState } from 'react';
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
import DefaultPage from "./components/DefaultPage/DefaultPage.jsx";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx"
import Info from './components/Info/Info.jsx';

function App() {
  let [ariaExpandedisplayfilepioneer, changeariaExpandedisplayfilepioneer] = useState('none');
  let [ariaExpandedisplaysearch, changeariaExpandedisplaysearch] = useState('none');
  let [ariaExpandedisplaycodeblocks, changeariaExpandedisplaycodeblocks] = useState('none');
  let [ariaExpandedisplaydebug, changeariaExpandedisplaydebug] = useState('none');
  let [ariaExpandedisplayextensions, changeariaExpandedisplayextensions] = useState('none');
  let [ariaExpandedisplaygit, changeariaExpandedisplaygit] = useState('none');
  let [ariaExpandedisplaygithub, changeariaExpandedisplaygithub] = useState('none');
  let [ariaExpandedisplayterminal, changeariaExpandedisplayterminal] = useState('none');
  let [InfoDisplay, setInfoDisplay] = useState('none')
  let [TabDisplay, setTabDisplay] = useState('flex')
  let [WelcomePageDisplay, setWelcomePageDisplay] = useState('flex')
  let [DefaultPageDisplay, setDefaultPageDisplay] = useState('none')
  const [bgOpacityDisplay, setBgOpacityDisplay] = useState('none')
  const toggleWelcomePageDisplay = () => {
    console.log("clicked");
    setDefaultPageDisplay('flex')
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

  const toggleInfoDisplay = () => {
    setInfoDisplay('flex')
    setBgOpacityDisplay('flex')
  }

  const triggerInfoClose = () => {
    console.log("toggled")
    setInfoDisplay('none')
    setBgOpacityDisplay('none')
  }

  return (
    <>
      <Info triggerInfoClose={triggerInfoClose} InfoDisplay={InfoDisplay} bgOpacityDisplay={bgOpacityDisplay} />
      <div id="mainProductivityArea">
        <MenuBar toggleInfoDisplay={toggleInfoDisplay} />
        <div className="mainsect">
          <div className="codewrpr">
            <ReviewBar />
            <div className="maincodearea">
              <DefaultPage DefaultPageDisplay={DefaultPageDisplay} dimensionsDefaultPage={insidemaincodeareaStyle} />
              <Tabs tabDisplay={TabDisplay} toggleWelcomePagedisplay={toggleWelcomePageDisplay} />
              <WelcomePage DimensionsWelcomePage={insidemaincodeareaStyle} WelcomePageDisplay={WelcomePageDisplay} />
              <MonacoEditor style={insidemaincodeareaStyle} />
            </div>
          </div>
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
        <StatusBar />
      </div>
    </>
  );
}

export default App;