import React from 'react'

import { Navigate } from 'react-router-dom';

export const RutasProtegidas = ({ children,user, role }) => {

console.log("role de entrada es: ",role)

console.log("el user protegido es: ", user.role)
  if (!user) {
    console.log("usuario incorrecto")
    return <Navigate to='/' />;
    
  }

 
 if (!role){
    console.log("role incorrecto")
    return   <Navigate to='/' />;

 } 

if (role !== user.role) {
    console.log("roles diferentes")
    return <Navigate to='/' />;
    }


return children;
};

export default RutasProtegidas



