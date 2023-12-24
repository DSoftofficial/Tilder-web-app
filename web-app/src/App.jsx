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


function App() {
  let [ariaExpandedisplay, changeariaExpandedisplay] = useState('none');
  const toggleAriaExpanded = () => {
    console.log("clicked");
    if (ariaExpandedisplay === "none") {
      // console.log("toggled")
      changeariaExpandedisplay("flex");
      seteditorwrapperStyle({
        width: '72vw',
      })

    } else {
      changeariaExpandedisplay("none");
      seteditorwrapperStyle({
        width: '92vw',
      })
    }
  };
  const [editorwrapperStyle, seteditorwrapperStyle] = useState({
    width: '92vw',
    height: '83vh'
  })
  return (
    <>
      <MenuBar />
      <div className="mainsect">
        <div className="codewrpr">
          <ReviewBar />
          <div className="maincodearea">
            <Tabs />
            <MonacoEditor editorwrapperStyle={editorwrapperStyle} />
          </div>
        </div>
        <div className="SideBarmainwrper">
          <div className="SideBarmainwrper" ariaExpanded={ariaExpandedisplay}>
            <Extensions />
            <Search />
            <FilePioneer />
            <SideBar toggleAriaExpanded={toggleAriaExpanded} />
          </div>
        </div>
      </div>
      <StatusBar />
    </>
  );
}

export default App;
