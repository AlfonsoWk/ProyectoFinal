const consultarClima = () => {
    let ciudad = "";
    let temperatura = "";
    let icono = "";
    let logo = "";
    const infoClima = document.getElementById("infoClima");
    const api_key = "aea1bdbb48b844228895a431240a7d11";
    const lat = "-26.81371001999747";
    const lon = "-65.25177608408183";
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${api_key}&lang=es`;
    fetch(url)
        .then((res) => res.json())
        .then((res2) => {
            console.log(res2.data);
            ciudad = res2.data[0].city_name;
            temperatura = res2.data[0].temp;
            icono = res2.data[0].weather.icon;
            logo = `../src/icons/${icono}.png`;
            const descripcion = res2.data[0].weather.description;
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
export default consultarClima;