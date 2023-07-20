import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar/MenuBar'
import MonacoEditor from './components/Editor/MonacoEditor'
import SideBar from './components/SideBar/SideBar'


function App() {
  return (
    <>
      <MenuBar />
      <MonacoEditor />
      <SideBar />
    </>
  )
}

export default App
