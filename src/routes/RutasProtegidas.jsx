import React from 'react'

import { Navigate } from 'react-router-dom';

export const RutasProtegidas = ({ children,/*user,*/ role }) => {
 
  const user = JSON.parse(localStorage.getItem("loggedInUser")) 

console.log("role de entrada es: ",role)
console.log("children es ",children)

console.log("el user protegido es: ", user)
  if (!user) {
    console.log("usuario incorrecto")
    return <Navigate to='/' />;
    
  }

 
 if (!role){
    console.log("role incorrecto")
    return   <Navigate to='/' />;

 } 
if (user.role === "SUPERADMIN") {
  return children;; 
} 

if (role !== user.role) {
    console.log(`Roles diferentes: rol usestate = ${role}, rol local storage = ${user.role}`)
    return <Navigate to='/' />;
    }


return children;
};

export default RutasProtegidas



