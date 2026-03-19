import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          {/* Bildirishnoma butun ilova bo'ylab ko'rinishi uchun shu yerga qo'yiladi */}
          <Notification />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/appointments" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
