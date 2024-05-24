export const getClases = async (pagina) => {
  const token = JSON.parse(localStorage.getItem("token"))
  const user = JSON.parse(localStorage.getItem("loggedInUser"))

  const role = user.role
  let pagina1 = pagina;
  if (!pagina) {
    pagina1 = 1;
  }
   
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases?token=${token}&role=${role}&pagina=${pagina1}`)
    const data = await response.json();
    
    localStorage.setItem("paginacion", JSON.stringify(data.paginacion));
    return data.results;
  };


  
export const updateCupos = async (id, datos) => {

  console.log("los datos que se recibenson: ", datos)

    const objeto = JSON.stringify(datos)
  

    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases/${id}`, { 
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: objeto
     
      
    });
   
    const data = await response.json();
  
    return data;
  };

  export const deleteClases = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases/${id}`, { method: 'DELETE' });
      const data = await response.json();
      console.log(data);
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const crearClases = async (datos) => {
    
    const response = fetch(`${import.meta.env.VITE_BACK_URL}/clases`, { 
      
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(datos),
    });
  };
  /******** CLASES RESERVADAS POR USUARIOS ******** */

  export const clasesUsuarios = async (datos) => {
    console.log("la clase quedbe crearse es: ", datos)
    const response = fetch(`${import.meta.env.VITE_BACK_URL}/clases_usuarios`, { 
      
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(datos),
    });
  };

  export const getClasesUsuarios = async (usuario) => {
    const response = await fetch (`${import.meta.env.VITE_BACK_URL}/clases_usuarios?usuario=${usuario}`); 
    const data = await response.json();
   
  
    return data.results;
  };

  export const cancelaReserva = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases_usuarios/${id}`, { method: 'DELETE' });
      const data = await response.json();
      console.log(data);
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  