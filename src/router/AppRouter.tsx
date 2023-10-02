import Home from 'pages/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='home/*' element={Home()}></Route>
        <Route path='*' element={Home()}></Route>
    </Routes>

  )
}

export default AppRouter