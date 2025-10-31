import { createRoot } from 'react-dom/client'
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './homepage/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignupPage from './pages/signup'
import ResumePage from './resume-page/resume-page'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/upload" element={<ResumePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

