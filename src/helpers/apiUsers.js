export const getUsers = async () => {
  const response = await fetch(`http://localhost:3000/users`);
  const data = await response.json();
  console.log(data);

  return data;
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = response.json();
    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (datos) => {
  const horaInicio = new Date(datos.inicio);
  const horaFin = new Date(datos.fin);

  if (horaInicio >= horaFin) {
    throw new Error("La hora de inicio debe ser anterior a la hora de fin.");
  }

  const response = await fetch(`http://localhost:3000/users`, {
    method: "POST",
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsers = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
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
