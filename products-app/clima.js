let btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    let ciudad = document.querySelector('#ciudad').value

    ciudad = encodeURIComponent(ciudad)

    let key = "83a5f95b7e141fb64f8f8dfd98930529"

    //let url = `http://api.openweathermap.org/data/2.5/forecast?APPID=83a5f95b7e141fb64f8f8dfd98930529&q=${ciudad}`
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${key}`

    fetch(url)
        .then((respuesta)=>{
            console.log(respuesta)
            return respuesta.json()
        })
        .then((data)=>{
            console.log(data)

             let temperatura = data.main.temp
            //console.log(temperatura)
            let tempC = temperatura - 273.13;
            let tempF = temperatura * 9/5 - 459.67

            let p = document.querySelector('#temperatura')
            p.innerHTML = 'the temperature in your place is ' + tempC.toFixed(0) + ' C / ' + tempF.toFixed(0) + ' F '
            p.className = ""
            if(tempC<10){
                p.className = "cold"
            } else {
                p.className = "hot"
            } 

        })
        .catch((err)=>{
            alert("No se puede mostrar el clima")
        })

})