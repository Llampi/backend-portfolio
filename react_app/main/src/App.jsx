import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading ...")

  useEffect(() => {
    axios.get("/api/hello/")
        .then(response => setMessage(response.data.message))
        .catch(error => console.error("Error getting data:", error));
  }, []);

  return (
      <div>
          <h1>React connected with Django</h1>
          <p>{message}</p>
      </div>
  );
}

export default App
