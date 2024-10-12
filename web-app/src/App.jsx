import React, { useState, useEffect } from 'react';
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
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import Info from './components/Info/Info.jsx';
import NewFile from './components/NewFile/NewFile.jsx';

function App(props) {
  let [ariaExpandedisplayfilepioneer, changeariaExpandedisplayfilepioneer] = useState('none');
  let [ariaExpandedisplaysearch, changeariaExpandedisplaysearch] = useState('none');
  let [ariaExpandedisplaycodeblocks, changeariaExpandedisplaycodeblocks] = useState('none');
  let [ariaExpandedisplaydebug, changeariaExpandedisplaydebug] = useState('none');
  let [ariaExpandedisplayextensions, changeariaExpandedisplayextensions] = useState('none');
  let [ariaExpandedisplaygit, changeariaExpandedisplaygit] = useState('none');
  let [ariaExpandedisplayterminal, changeariaExpandedisplayterminal] = useState('none');
  let [ariaExpandedisplaygithub, changeariaExpandedisplaygithub] = useState('none');
  let [InfoDisplay, setInfoDisplay] = useState('none');
  let [TabDisplay, setTabDisplay] = useState('flex');
  let [WelcomeTabDisplay, setWelcomeTabDisplay] = useState('flex');
  let [WelcomePageDisplay, setWelcomePageDisplay] = useState('flex');
  let [DefaultPageDisplay, setDefaultPageDisplay] = useState('none');
  let [MonacoEditorDisplay, setMonacoEditorDisplay] = useState('none');
  let [bgOpacityDisplay, setBgOpacityDisplay] = useState('none');
  let [NewFileVisibility, setNewFileVisibility] = useState('none')
  let [code, setCode] = useState('');
  let [file, setFile] = useState();
  let [language, setLanguage] = useState('python');
  let [formFileName, setFormFileName] = useState('');
  const [TabsWrapperDisplay, setTabsWrapperDisplay] = useState('flex');
  const toggleWelcomePageDisplay = () => {
    setDefaultPageDisplay('flex');
    setTabsWrapperDisplay('none')
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
      })
    }
  };
  const toggleAriaExpandedextensions = () => {
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
      changeMaincodeAreaStyle({
        width: '72vw',
      })
      setMonacoEditorStyle({
        width: '72vw'
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
      changeMaincodeAreaStyle({
        width: '92vw',
      })
      setMonacoEditorStyle({
        width: '92vw'
      })
    }
  };

  const [monacoEditorStyle, setMonacoEditorStyle] = useState({
    width: '92vw',
    height: '83.5vh',
    opacity: '1'
  })

  let [maincodeareaStyle, changeMaincodeAreaStyle] = useState({
    width: '92vw',
    height: '83.5vh'
  })

  const toggleInfoDisplay = () => {
    setInfoDisplay('flex')
    setBgOpacityDisplay('flex')
  }

  const triggerInfoClose = () => {
    setInfoDisplay('none')
    setBgOpacityDisplay('none')
  }

  const triggerOpenFile = () => {
    setDefaultPageDisplay('none')
    setWelcomePageDisplay('none');
    setMonacoEditorDisplay('flex');
    setWelcomeTabDisplay('none');
    setTabsWrapperDisplay('flex');
  }

  // State to keep track of the number of divs
  const [tabCount, setTabCount] = useState(0);

  // Function to add a new div
  const addTab = () => {
    setTabCount(tabCount + 1);
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      // monacoRef.current?.editor.setModel(monaco.editor.createModel(new TextDecoder().decode(readFileSync(file.path)), file.type));
      triggerOpenFile()
      addTab();
      var reader = new FileReader();
      reader.onload = async (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
      let newLanguage = 'python';
      const extension = file.name.split('.').pop();
      if (['css', 'html', 'py', 'dart', 'js', 'java', 'go', 'asm', 'webmanifest', 'txt', 'bat', 'bibtext', 'c', 'cpp', 'cs', 'dart', 'hsl', 'fsharp', 'clojure', 'groovy', 'ini', 'tsx', 'jsx', 'powershell'].includes(extension)) {
        newLanguage = extension;
      }
      setLanguage(newLanguage);
      console.log(extension);
      console.log(newLanguage);
    }
  }, [file]);

  let fileName = file // default name of the file, will be overwritten when a real file is selected
  if (!!fileName && !!file?.name) {
    fileName = `${file.name}`;
  }

  const triggerNewFile = () => {
    setTabsWrapperDisplay('flex');
    setWelcomeTabDisplay('none');
    setDefaultPageDisplay('none');
    setWelcomePageDisplay('none');
    setMonacoEditorDisplay('flex');
    setNewFileVisibility('block')
    setMonacoEditorStyle({
      width: '92vw',
      height: '83.5vh',
      opacity: '0.5'
    })
  }

  const CreateNewFile = (event) => {
    event.preventDefault();
    setFormFileName(document.getElementById('fileName').value);
    console.log(formFileName);
    
  }


  return (
    <>
      <Info triggerInfoClose={triggerInfoClose} InfoDisplay={InfoDisplay} />
      <div id="mainProductivityArea">
        <MenuBar toggleInfoDisplay={toggleInfoDisplay} handleFileChange={handleFileChange} triggerNewFile={triggerNewFile} />
        <div className="mainsect">
          <div className="codewrpr">
            <ReviewBar />
            <div className="maincodearea" style={maincodeareaStyle}>
              <DefaultPage DefaultPageDisplay={DefaultPageDisplay} dimensionsDefaultPage={maincodeareaStyle} />
              <Tabs TabDisplay={TabDisplay} WelcomeTabDisplay={WelcomeTabDisplay} toggleWelcomePagedisplay={toggleWelcomePageDisplay} TabsWrapperDisplay={TabsWrapperDisplay} fileName={fileName} tabCount={tabCount} />
              <WelcomePage DimensionsWelcomePage={maincodeareaStyle} WelcomePageDisplay={WelcomePageDisplay} triggerNewFile={triggerNewFile} handleFileChange={handleFileChange} />
              <div id="mainCodeNavigation">
                <NewFile triggerNewFile={triggerNewFile} NewFileVisibility={NewFileVisibility} CreateNewFile={CreateNewFile}/>
                <MonacoEditor monacoEditorStyle={monacoEditorStyle} code={code} language={language} MonacoEditorDisplay={MonacoEditorDisplay} />
              </div>
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