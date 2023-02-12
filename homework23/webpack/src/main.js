const response = axios.get('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
response.then((res)=>{
    document.querySelector('.q').innerHTML = res.data.name;
    document.querySelector('.temp').innerHTML = res.data.main.temp;
    document.querySelector('.pressure').innerHTML = res.data.main.pressure;
    document.querySelector('.description').innerHTML = res.data.weather[0].description;
    document.querySelector('.humidity').innerHTML = res.data.main.humidity;
    document.querySelector('.speed').innerHTML = res.data.wind.speed;
    document.querySelector('.deg').innerHTML = res.data.wind.deg;
})
