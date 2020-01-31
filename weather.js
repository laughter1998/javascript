const weather = document.querySelector(".js-weather");

const API_KEY= "7af0627ce2afb5a0509635088573192c";
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // console.log(json)
      const temperatuer = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperatuer} @ ${place}`;
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitue = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitue,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitue, longitude);
}

function handleGeoError(){
  console.log('cant access geo location');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    getWeather(parseCoords.latitue, parseCoords.longitude);
    // console.log(parseCoords);
  }
}

function init(){
  loadCoords();
}

init();
