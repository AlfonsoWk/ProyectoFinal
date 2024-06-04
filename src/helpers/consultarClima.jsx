const traducirDescripcion = (descripcion) => {
    const traducciones = {
        "clear sky": "Cielo Despejado",
        "few clouds": "Pocas Nubes",
        "scattered clouds": "Nubes Dispersas",
        "broken clouds": "Nubes Rotas",
        "overcast clouds": "Nublado",
        "shower rain": "Lluvia Ligera",
        "rain": "Lluvia",
        "thunderstorm": "Tormenta Eléctrica",
        "snow": "Nieve",
        "mist": "Neblina"
        // Puedes agregar más traducciones según tus necesidades
    };

    // Verificar si la descripción existe en el mapeo, si no, retornar la descripción original
    return traducciones[descripcion.toLowerCase()] || descripcion;
};

const consultarClima = (ubicacion) => {
    let ciudad = "";
    let temperatura = "";
    let icono = "";
    let logo = "";
    const infoClima = document.getElementById("infoClima");
    const api_key = "34765feb8963fd6cd54f08c7797249bd";
    const { lat, lon } = ubicacion;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            ciudad = data.name;
            temperatura = data.main.temp;
            icono = data.weather[0].icon;

            // Ajustar el formato del icono
            /* const letra = obtenerLetraIcono(data.weather[0].description);
            const numero = icono.substring(0, 2);
            const momento = icono.charAt(2) === 'd' ? 'd' : 'n'; // 'd' para día, 'n' para noche
            const iconoFormateado = `${letra}${numero}${momento}`; */
            /* logo = `../src/icons/${iconoFormateado}.png`; */
            logo = `http://openweathermap.org/img/wn/${icono}.png`;

            console.log('logo: ',logo);

            const descripcion = traducirDescripcion(data.weather[0].description);
            infoClima.innerHTML = `
                <h2 class="text-center">${ciudad}</h2>
                <h1 class="text-center">${temperatura} °C</h1>
                <h2 class="text-center">${descripcion}</h2>
                <img src="${logo}" alt="Icono del clima">
            `;
        })
        .catch((error) => {
            console.error("Error al consultar el clima:", error);
            infoClima.innerHTML = `<p>Error al consultar el clima. Inténtalo de nuevo más tarde.</p>`;
        });
};

const obtenerLetraIcono = (descripcion) => {
    const letras = {
        "clear sky": "c",
        "few clouds": "a",
        "scattered clouds": "a",
        "broken clouds": "a",
        "overcast clouds": "a",
        "shower rain": "r",
        "rain": "r",
        "thunderstorm": "t",
        "snow": "s",
        "mist": "m"
    };
    return letras[descripcion.toLowerCase()] || 'a'; // Por defecto, 'a' si no se encuentra un tipo de clima específico
};

export default consultarClima;
