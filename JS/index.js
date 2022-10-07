let result = []

function callApi() {
    let city = document.getElementById("city").value
    fetch(`http://api.weatherstack.com/current?access_key=318f987cc4bc0f111ecc9f69dcfc680b&query=${city}`, { method: 'GET' })
    .then(response => response.json())
    .then(data =>{
        result = data;
        resulttothepage();

    })
}

function callAPIDefault(){
    fetch(`http://api.weatherstack.com/current?access_key=318f987cc4bc0f111ecc9f69dcfc680b&query=Aurangabad`, { method: 'GET' })
    .then(response => response.json())
    .then(data =>{
        result = data;
        resulttothepage();
    })
}

function resulttothepage(){
    document.getElementById('cityname').innerHTML ="Whether in "+result.location.name
    document.getElementById('celcius').innerHTML=result.current.temperature+"°C"
    document.getElementById('weather_descriptions').innerHTML=result.current.weather_descriptions
    let image=document.getElementById('imgs')
    image.src=result.current.weather_icons[0]
    document.getElementById('humidity').innerHTML="Humidity: "+result.current.humidity+"%"
    document.getElementById('wind_speed').innerHTML="Wind Speed : "+result.current.wind_speed+"km/h"


}
