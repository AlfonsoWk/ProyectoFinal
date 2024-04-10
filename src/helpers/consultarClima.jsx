


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
    const part = "minutelly"
    const url =  `https://api.weatherbit.io/v2.0/current?lat=-26.81371001999747&lon=-65.25177608408183&key=${apy_key}&lang=es` 
     //`https://api.weatherbit.io/v2.0/current?lat=-26.81371001999747&lon=-65.25177608408183&key=${apy_key}&lang=es`
                
    
  

    fetch (url)
    .then((res) => res.json())
    .then(res2=>{
        
        console.log(res2.data)
        ciudad = res2.data[0].city_name
        temperatura = res2.data[0].temp
        icono = res2.data[0].weather.icon
        logo = `../src/icons/${icono}.png`
        const descricion = res2.data[0].weather.description
        
        datosClima =[ciudad, temperatura, icono, descricion]

        

    
       

       infoClima.innerHTML = ` 
       <h2 class="text-center"> ${datosClima[0]} </h2>
       <h1 class="text-center" >${datosClima[1]} °C</h1>
       <h2 class="text-center">${datosClima[3]} </h2>
       <img src=${logo} alt="">
       
       `

      
    
    }
        
        )

 

    
  
}


export default consultarClima



