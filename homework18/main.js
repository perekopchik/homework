const response = axios.get('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
response.then((res)=>{
    document.querySelector('.q').innerHTML = JSON.stringify(res.data.name);
    document.querySelector('.temp').innerHTML = JSON.stringify(res.data.main.temp);
    document.querySelector('.pressure').innerHTML = JSON.stringify(res.data.main.pressure);
    document.querySelector('.description').innerHTML = JSON.stringify(res.data.weather[0].description);
    document.querySelector('.humidity').innerHTML = JSON.stringify(res.data.main.humidity);
    document.querySelector('.speed').innerHTML = JSON.stringify(res.data.wind.speed);
    document.querySelector('.deg').innerHTML = JSON.stringify(res.data.wind.deg);
    console.log(res.data);
})
