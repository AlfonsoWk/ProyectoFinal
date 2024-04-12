export const getClases = async () => {
   
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases`) //fetch(`http://localhost:3000/clases`);
    const data = await response.json();
    
   console.log("los datons que deben mostrase son: ", data.results)
    return data.results;
  };


  
export const updateCupos = async (id, datos) => {

  console.log("los datos que se recibenson: ", datos)

    const objeto = JSON.stringify(datos)
  

    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases/${id}`, {
      method: 'PUT',
      headers: {'Contentent-Type': 'application/json'},
      body: objeto
     
      
    });
   
    const data = await response.json();
  
    return data;
  };

  /******** CLASES RESERVADAS POR USUARIOS ******** */

  export const clasesUsuarios = async (datos) => {
    const response = fetch(`${import.meta.env.VITE_BACK_URL}/clases_usuarios`, {
      method: 'POST',
      headers: {'Contentent-Type': 'application/json'},
      body: JSON.stringify(datos),
    });
  };

  export const getClasesUsuarios = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/clases_usuarios`);
    const data = await response.json();
    console.log(data);
  
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
  