import React, { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar/MenuBar.jsx'
import MonacoEditor from './components/Editor/MonacoEditor.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import ReviewBar from './components/ReviewBar/ReviewBar.jsx'
import StatusBar from './components/StatusBar/StatusBar.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import Search from './components/SideBar/Main Components/Search/Search.jsx';
import Extensions from './components/SideBar/Main Components/Extensions/Extensions.jsx';
import FilePioneer from './components/SideBar/Main Components/filePioneer/filePioneer.jsx'



function App() {
  return (
    <>
      <MenuBar />
      <div className="mainsect">
        <div className="codewrpr">
          <ReviewBar />
          <div className="maincodearea">
            <Tabs />
            <MonacoEditor />
          </div>
        </div>
        <div className="SideBarmainwrper">
          <Extensions />
          <Search />
          <FilePioneer />
          <SideBar />
        </div>
      </div>
      <StatusBar />
    </>
  )
}

export default App
