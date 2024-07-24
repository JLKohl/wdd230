
const weatherSection = document.querySelector('.forecast');

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.4230&lon=-86.9223&appid=d17513fe5a9ef991892e8744ddca95c9&units=imperial";
const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=-86.9223&appid=d17513fe5a9ef991892e8744ddca95c9&units=imperial";

async function apiFetch(url, callback) {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            callback(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayToday(data){
    weatherSection.innerHTML = `
    <div class="weather-info">
        <h3>Today's Weather</h3>
        <p>${data.main.temp.toFixed(0)}℉</p><br>
        <p>Humidiy: ${data.main.temp}%</p> <br>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
    </div>`;
}

function displayTomorrow(data) {
   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   let tomorrowStr = tomorrow.toISOString().split("T")[0] + " 15:00:00";
   let tomorrowForecast = data.list.find(item => item.dt_txt === tomorrowStr);
   
   if (tomorrowForecast) {
       weatherSection.innerHTML += `
        <div class="weather-info">
           <h3>Tomorrow's Weather <br> at 3</h3>
           <p>${tomorrowForecast.main.temp.toFixed(0)}℉</p><br>
           <p>Humidity: ${tomorrowForecast.main.humidity}%</p> <br>
           <img src="http://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png" />
    </div>`;
   }
   
   
}

apiFetch(currentUrl, displayToday);
apiFetch(weatherUrl, displayTomorrow);