/*
export const getUsersByEmail = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_BACK_URL}/user?email=${email}`);
  
  const [user] = await response.json();

  if (!user) {
    return null;
  }
  return user;


};*/

export const getUsers = async (pagina) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const role = user.role;
  let pagina1 = pagina;

  //http://localhost:4000/api
  //${import.meta.env.VITE_BACK_URL}

  if (!pagina) {
    pagina1 = 1;
  }

  const response = await fetch(
    `${import.meta.env.VITE_BACK_URL}/user?token=${token}&role=${role}&pagina=${pagina1}`
  );
  const data = await response.json();

  localStorage.setItem("paginacion", JSON.stringify(data.paginacion));

  return data.results;
};

export const createUser = async (datos) => {
  console.log("lo que se va a crear es: ", datos);
  const response = await fetch(`${import.meta.env.VITE_BACK_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  const data = response.json();
  console.log("la respuesta es: ", data);
};

export const deleteUser = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_BACK_URL}/user/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);

  return data;
};

export const updateUsers = async (id, datos) => {
  console.log("llegue al put");
  const response = await fetch(`${import.meta.env.VITE_BACK_URL}/user/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};

export const updateCupos = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};
