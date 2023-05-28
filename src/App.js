

import React, { useState } from 'react';
 
import Create from "./create";
import shapef from "C:/Users/devon/Promineo/shape-fitness employee data app/src/shapef.png"
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './update';
import Read from './read';


function App() {
  return (
    <>
      <div className='main'>
        <div>
          <img src={shapef} alt="logo" />
        </div>
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/read" element={<Read />} />
          </Routes>


        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
