import React, { useState } from 'react';
import { Error404 } from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Error404/>
    </>
  )
}

export default App
