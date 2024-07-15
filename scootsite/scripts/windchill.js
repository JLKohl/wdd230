const temp = document.getElementById('temperature').textContent;
const wind = document.getElementById('windspeed').textContent;

const temperature = parseInt(temp, 10);
const windspeed = parseInt(wind, 10);

function calculateWindchill(temperature, windspeed){

    return 35.74 + 0.6215*temperature - 35.75*windspeed**0.16 + 0.4275*temperature * windspeed**0.16;

}

if (temperature <= 50 && windspeed >3.0){

    const windchill = calculateWindchill(temperature, windspeed);

    document.getElementById('windchill').textContent = windchill.toFixed(1) + "°F ";
}else {
    document.getElementById('windchill').textContent = "N/A";
}