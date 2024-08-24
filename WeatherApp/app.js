const apiKey = "b7a1327007b3e50756be83ea9f551860";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cardColor = document.querySelector(".card");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }
    else {
        document.querySelector(".error").style.display = "none";
    }
   

    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = `${data.wind.speed} m/s`;

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        cardColor.style.background = "linear-gradient(135deg, #708090, #B0C4DE)";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        cardColor.style.background = "linear-gradient(135deg, #00BFFF, #87CEFA)";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        cardColor.style.background = "linear-gradient(135deg, #4682B4, #708090)";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        cardColor.style.background = "linear-gradient(135deg, #B0E0E6, #FFFFFF)";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        cardColor.style.background = "linear-gradient(135deg, #D3D3D3, #B0E0E6)";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        cardColor.style.background = "linear-gradient(to bottom, #DDEAF6, #FAFAFA)";
    }
    else {
        weatherIcon.src = "images/unknown.png";
    }



    document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click", () => {
    const cityEntered = searchBox.value;
    checkWeather(cityEntered);
});

//const tempVal = document.querySelector(".temp")

//if(tempVal.value <= 0) {
   // document.querySelector(".weather-icon").innerHTML = data.name;
//}