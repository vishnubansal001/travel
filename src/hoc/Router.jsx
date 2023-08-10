import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'

export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
    </Routes>
  )
}
