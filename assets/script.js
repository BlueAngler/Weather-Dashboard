var APIKey = "4cbc52e85e24ca7452641b3f8eee29fb"; 
 
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey
var searchbuttonEl = document.getElementById("searchbutton");
var currentweatherEl = document.getElementById("currentweather")
var searchedcity = document.getElementById("cityentered")
var city = "";




searchbuttonEl.addEventListener('click', searchcitybutton)
function searchcitybutton() {
    var citysearch=searchedcity.value
    console.log("The value of the searched city is:" , citysearch)
    if(city="") {
        city=citysearch
    }
        
   
   






   fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        currentweatherEl.textContent=response.main.temp

    })
}


 



