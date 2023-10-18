import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar/MenuBar'
import MonacoEditor from './components/Editor/MonacoEditor'
import SideBar from './components/SideBar/SideBar'
import ReviewBar from './components/ReviewBar/ReviewBar'
import StatusBar from './components/StatusBar/StatusBar'
import Explorer from './components/SideBar/Main Components/Explorer/Explorer.jsx'


function App() {
  return (
    <>
      <MenuBar />
      <div className="mainsect">
        <div className="codewrpr">
          <ReviewBar />
          <MonacoEditor />
        </div>
        <div className="SideBarmainwrper">
          <Explorer />
          <SideBar />
        </div>
      </div>
      <StatusBar/>
    </>
  )
}

export default App
