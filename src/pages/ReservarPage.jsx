import ReservaTurno from "../components/ReservaTurno"
import NavBar from "../components/NavBar"
import { Footer } from "../components/Footer"


const ReservarPage = () => {
  return (
   <>
        <div style={{ backgroundImage: `url('src/images/reservar.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
    <NavBar/>
    <ReservaTurno/>
    <Footer/>
    </div>
   </>
  )
}

export default ReservarPage