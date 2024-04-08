import React from 'react'
import Carrusel from '../components/Carrusel'
import Clima from "../components/Clima"

import proteinas from "../images/proteinas.jpg"
import indumentaria from "../images/Indumentaria.webp"
import musculacion from "../images/PlasMusculacion.jpg"
import clases from "../images/soloclases.jpg"
import full from "../images/planfull.jpg"

import "../css/PaginaPrincipal.css"

const PaginaPrincipal = () => {
  return (
   <>
   <div className="container">
    <div className="row">
     
      <Carrusel/>
    
    </div>

    <div className="row" >
      <div className="col-md-4">
        <div className='planes'>
          <h5>PLAN: MUSCULACION</h5>
          <img src={musculacion} alt="" />
        </div>
      </div>
      <div className="col-md-4">
        <div className='planes' >
          <h4>PLAN: SOLO CLASES</h4>
          <img src={clases} alt="" />
        </div>
      </div>
      <div className="col-md-4">
        <div className='planes'>
          <h4>PLAN: FULL</h4>
          <img src={full} alt="" />
        </div>
      </div>
    </div>

    <div className="row">

      <div className="col-md-6">
        <div className="ventas">
        <div id='suplementos'>
          <h3>SUPLEMENTOS</h3>
          <img src={proteinas} alt="" className='imagenes' />
        </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="ventas">
        <div id="indumentaria">
          <h3>ROPA DEPORTIVA</h3>
          <img src={indumentaria} alt="" className='imagenes' />
        </div>
        </div>
        
      </div>
        
    </div>


    <div className="row">
      <div className="col">
      <div className="clima">
          <Clima/>
      </div>
      </div>
      
    </div>


   </div>

   <br />
  
   <br />
   <br />
   </>
  )
}

export default PaginaPrincipal