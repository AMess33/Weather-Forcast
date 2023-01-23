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
var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("city");

searchEl.addEventListener('click', Event => {
   var searchCityVal = document.querySelector('#searchCity').value;
   console.log(searchCityVal);
   currentCity.textContent = searchCityVal;
});
    
