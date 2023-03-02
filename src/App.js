import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewMore from './Components/ViewMore';
import NavBar from './Components/NavBar';

function App() {
  
  const [houses, sethouses] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then(res => res.json())
      .then((data) => sethouses(data))
  }, [])
  return (
    
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home houses = {houses}  />} />
          <Route path="/form" element={<Form houses={houses} sethouses={sethouses} />}/>
          <Route path="/house/:id" element={<ViewMore />} />
        </Routes>
        
      </div>
    </BrowserRouter>


  );
}

export default App;