import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
