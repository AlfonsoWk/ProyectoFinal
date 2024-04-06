import React, { useState } from 'react';
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Footer/>
    </>
  )
}

export default App
