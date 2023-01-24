$(function () {
// // get date from dayjs x
// // put todays date into html doc x
   var today = dayjs();
   $('#todaysDate').text(today.format('dddd, MMMM D'))
});
//  event listener for form submit X
// create api call from form submit city info
// call api to get longitude and latitude of city

// add event listener X
   // get value from input and place in variable X
      // add searched city to h2 element on html page X
         // create api fetch URL from searched city X
var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("city");

searchEl.addEventListener('click', Event => {
   var searchCityVal = document.querySelector('#searchCity').value;
   currentCity.textContent = searchCityVal;
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
      console.log(latitude);
      console.log(longitude);
      var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=ef319315baa0199063683f91eaf8539b&units=imperial&cnt=1';
      console.log(forecastUrl);
      getForecast(forecastUrl);
   }
})
};
   //  fetch weather api from forcastURL
      // save weather data into variables
         // append variables to html page
function getForecast(url){
      fetch(url)
.then(function (response){
      return response.json();
})
.then(function (data) {
   for (var i = 0; i < data.list.length; i++) {
      var temperature = (data.list[i].main.temp);
      console.log(temperature);
         // var temperature = (data[i].);
   }
})
}