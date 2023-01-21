import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Top from './top/Top';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
