import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './layout/MainLayout'
import Dashboard from './layout/Dashboard'
import Login from './components/Login'
import { useAuth } from './config/authProvider'


function App() {
  const {  isAuthenticated} = useAuth()

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      {/* <Route index element={} /> */}
      {isAuthenticated ? (
        <Route path="/" element={<Dashboard />} />
      ):(
        <Route path="/" element={<Login />} />
      )}
       
      {/* <Route path="/" element={<Dashboard />} /> */}
      
      </Route>
    </Routes>
      
    </>
  );
}

export default App;
