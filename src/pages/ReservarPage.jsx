import ReservaTurno from "../components/ReservaTurno"
import NavBar from "../components/NavBar"
import { Footer } from "../components/Footer"
import reservar from "../images/reservar.jpg"


const ReservarPage = () => {
  return (
   <div style={{ backgroundImage: `url('${reservar}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
    <NavBar/>
    <ReservaTurno/>
    <Footer/>
    </div>
  )
}

export default ReservarPage