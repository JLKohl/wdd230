
const highTempSpan = document.querySelector('.high-temp');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=-86.9223&appid=d17513fe5a9ef991892e8744ddca95c9&units=imperial";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok){
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
    highTempSpan.textContent = "The High Temperature in Cozumel Today is " + data.list[0].main.temp_max.toFixed(0) + "℉";
}

apiFetch(url);