import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Principal from "./components/Principal"
import Registration from "./components/Registration"
import Login from "./components/Login"
import DashboardUser from "./components/DashboardUser"



function App() {
  /* const [count, setCount,] = useState(0) */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />

        
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
