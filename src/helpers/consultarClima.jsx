


const consultarClima = () => {
    
    let datosClima = []  
    let temperatura = ""
    let ciudad = ""
    let icono = ""
    let logo = ""

    const infoClima = document.getElementById("infoClima")

    const apy_key = "aea1bdbb48b844228895a431240a7d11"
    const lat = "38.491788621835326"
    const lon = "-116.58199762501916"
    const part = "current"
    const url = `https://api.weatherbit.io/v2.0/current?lat=-26.81371001999747&lon=-65.25177608408183&key=${apy_key}&include=minutely`
    
  

    fetch (url)
    .then((res) => res.json())
    .then(res2=>{
        console.log("ciudad",res2.data[0].city_name, "temperat", res2.minutely[1].temp)
        console.log("facundo clima: ", res2)
        
        ciudad = res2.data[0].city_name
        temperatura = res2.data[0].temp
        icono = res2.data[0].weather.icon
        logo = `../src/icons/${icono}.png`
        
        datosClima =[ciudad, temperatura, icono]

        

    
       

       infoClima.innerHTML = ` 
       <h3>Ciudad: ${datosClima[0]} </h3>
       <h3>Clima: ${datosClima[1]} °C</h3>
       <img src=${logo} alt="">
       
       `

      
    
    }
        
        )

 

    
  
}

export default consultarClima



