
const forecastDiv = document.querySelector("#forecast");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=36.66&lon=-80.92&appid=d17513fe5a9ef991892e8744ddca95c9&units=imperial";


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) { 
    let prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate.setHours(0, 0, 0, 0);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let count = 0;
    
    for (let i = 0; i < data.list.length && count < 6 ; i++){
        const forecastDate = new Date(data.list[i].dt * 1000);
        forecastDate.setHours(0, 0, 0, 0);
        
        if (forecastDate.getTime() === prevDate.getTime()) {
            continue;
        } 
        
        prevDate = forecastDate;
        
        count++;
        
        const dateString = (forecastDate.getTime() === today.getTime()) ? 'Today' : forecastDate.toLocaleDateString('en-US', {month:'long', day:'numeric'});
        
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `<h3>${dateString}</h3>
            <p> ${data.list[i].main.temp} &deg;F</p>
            <img src="https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="${data.list[i].weather[0].description}">
            <p>${data.list[i].weather[0].description}</p>`;
        forecastDiv.appendChild(forecastItem);
    }
}    
    


apiFetch(url);