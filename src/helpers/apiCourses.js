export const getCourses = async () => {
  const response = await fetch(`http://localhost:3000/clases`);
  const data = await response.json();
  console.log(data);

  return data;
};

export const getCourseById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/clases/${id}`);
    const data = response.json();
    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const createCourse = async (datos) => {
  const horaInicio = new Date(datos.inicio);
  const horaFin = new Date(datos.fin);
  
  if (horaInicio >= horaFin) {
    throw new Error("La hora de inicio debe ser anterior a la hora de fin.");
  }

  const response = await fetch(`http://localhost:3000/clases`, {
    method: 'POST',
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};


export const deleteCourse = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/clases/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/clases/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};

export const updateCupos = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/clases/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};
