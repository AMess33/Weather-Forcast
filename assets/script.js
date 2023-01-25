$(function () {
// // get date from dayjs x
// // put todays date into html doc x
   var today = dayjs();
   $('#todaysDate').text(today.format('dddd, MMMM D'))
});

// add event listener X
   // get value from input and place in variable X
      // add searched city to h2 element on html page X
         // create api fetch URL from searched city X
var searchEl = document.getElementById("searchBtn");
var conditions = document.getElementById("conditions");
var currentCity = document.getElementById("city");
var currentWeather = document.getElementById("currentWeather");
var searchCityVal = '';

searchEl.addEventListener('click', Event => {
   var searchCityVal = document.querySelector('#searchCity').value;
   currentCity.textContent = searchCityVal.toUpperCase();
   if (searchCityVal === '') {
      alert('You must enter a city name');
      return
   }   
   var weatherUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchCityVal + '&limit=1&appid=ef319315baa0199063683f91eaf8539b';
   console.log(weatherUrl);
   geoLocate(weatherUrl);
});
// fetch longitude and latitude X
   // save lon and lat to variables X
      // create new api call with lon and lat X
function geoLocate(url){
      fetch(url)
.then(function (response){
   return response.json();
})
.then(function (data) {
   for (var i = 0; i < data.length; i++) {
      var latitude = (data[i].lat);
      var longitude = (data[i].lon);
      var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=ef319315baa0199063683f91eaf8539b&units=imperial&cnt=1';
      console.log(forecastUrl);
      getForecast(forecastUrl);
   }
})
};
   //  fetch weather api from forcastURL X
      // save weather data into variables
         // append variables to html page
function getForecast(url){
      fetch(url)
.then(function (response){
      return response.json();
})
.then(function (data) {
   for (var i = 0; i < data.list.length; i++) {
      var temperature = Math.floor(data.list[i].main.temp);
      var wind = (data.list[i].wind.speed);
      var humidity = (data.list[i].main.humidity);
   }

      var currentTemp = document.createElement("li");
      var currentWind = document.createElement("li");
      var currentHumid = document.createElement("li");

      currentTemp.textContent = "Temp: " + temperature + ' Degrees';
      currentWind.textContent = "Wind: " + wind + 'mph';
      currentHumid.textContent = "Humidity: " + humidity + '%';

      conditions.append(currentTemp, currentWind, currentHumid);
      // var img = document.createElement('img');
      // var listEl = document.createElement('li');
      // img.src = 'http://openweathermap.org/img/wn/' + (data.list[i].weather[0].icon) + '@2x.png';
      // currentWeather.textContent = temperature + ' degrees with ' + .toUpperCase();
      // document.getElementById('city').appendChild(img);
      // listEl.textContent = 'Temp:' + temperature;
      // document.getElementById('conditions').appendChild(listEl);
      // // document.getElementById('city').appendChild(listEl)

   }
)
}