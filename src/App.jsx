import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './layout/MainLayout'
import Dashboard from './layout/Dashboard'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      {/* <Route index element={} /> */}
      <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
