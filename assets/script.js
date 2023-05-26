
    var searchCityEl = document.getElementById("search-city");
    var cityInput = document.getElementById('city-input');
    var button = document.getElementById('1')
    var lastCitySpan = document.querySelector('#most-recent')
    // function to get weather for city searched
    function weatherSearch(event) {
        event.preventDefault();

        var cityInput = document.getElementById("city-input");
        // First using name of city input api docs
        var cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=6ac40e04657514fb1da3311ff15ccebb`; 

            var cityInputVal = cityInput.value

            localStorage.setItem("cityInput", cityInputVal)

            document.getElementById('1').innerHTML = localStorage.getItem("cityInput")
        // fetching api docs
        fetch(cityUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // obtaining latitude and longitude to input into other api url
            var lat = data[0].lat.toFixed(2);
            var lon = data[0].lon.toFixed(2);
            
            var latLonUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&units=imperial&appid=6ac40e04657514fb1da3311ff15ccebb`
            // fetching new api url
            return fetch(latLonUrl);
            })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // displaying the requested data in cards. couldn't get for loop to work in time...
            document.getElementById("title").innerHTML = (data.city.name)
            document.getElementById("date").innerHTML = (data.list[0].dt_txt)
            document.getElementById("icon").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png")
            document.getElementById("temperature").innerHTML = ('Temperature: ' + data.list[0].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity").innerHTML = ('Humidity: ' + data.list[0].main.humidity + '%')
            document.getElementById("wind-speed").innerHTML = ('Wind Speed: ' + data.list[0].wind.speed + ' mph')

            document.getElementById("title2").innerHTML = (data.city.name)
            document.getElementById("date2").innerHTML = (data.list[7].dt_txt)
            document.getElementById("icon2").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[7].weather[0].icon + ".png")
            document.getElementById("temperature2").innerHTML = ('Temperature: ' + data.list[7].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity2").innerHTML = ('Humidity: ' + data.list[7].main.humidity + '%')
            document.getElementById("wind-speed2").innerHTML = ('Wind Speed: ' + data.list[7].wind.speed + ' mph')

            document.getElementById("title3").innerHTML = (data.city.name)
            document.getElementById("date3").innerHTML = (data.list[15].dt_txt)
            document.getElementById("icon3").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[15].weather[0].icon + ".png")
            document.getElementById("temperature3").innerHTML = ('Temperature: ' + data.list[15].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity3").innerHTML = ('Humidity: ' + data.list[15].main.humidity + '%')
            document.getElementById("wind-speed3").innerHTML = ('Wind Speed: ' + data.list[15].wind.speed + ' mph')

            document.getElementById("title4").innerHTML = (data.city.name)
            document.getElementById("date4").innerHTML = (data.list[23].dt_txt)
            document.getElementById("icon4").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[23].weather[0].icon + ".png")
            document.getElementById("temperature4").innerHTML = ('Temperature: ' + data.list[23].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity4").innerHTML = ('Humidity: ' + data.list[23].main.humidity + '%')
            document.getElementById("wind-speed4").innerHTML = ('Wind Speed: ' + data.list[23].wind.speed + ' mph')

            document.getElementById("title5").innerHTML = (data.city.name)
            document.getElementById("date5").innerHTML = (data.list[31].dt_txt)
            document.getElementById("icon5").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png")
            document.getElementById("temperature5").innerHTML = ('Temperature: ' + data.list[31].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity5").innerHTML = ('Humidity: ' + data.list[31].main.humidity + '%')
            document.getElementById("wind-speed5").innerHTML = ('Wind Speed: ' + data.list[31].wind.speed + ' mph')

            document.getElementById("title6").innerHTML = (data.city.name)
            document.getElementById("date6").innerHTML = (data.list[39].dt_txt)
            document.getElementById("icon6").setAttribute('src', "http://openweathermap.org/img/w/" + data.list[39].weather[0].icon + ".png")
            document.getElementById("temperature6").innerHTML = ('Temperature: ' + data.list[39].main.temp.toFixed(0) + '°F')
            document.getElementById("humidity6").innerHTML = ('Humidity: ' + data.list[39].main.humidity + '%')
            document.getElementById("wind-speed6").innerHTML = ('Wind Speed: ' + data.list[39].wind.speed + ' mph')

        })
        .catch(err => {
            console.log(err);
        })
    }
        // when submit is clicked, weather populates and storage happens
    searchCityEl.addEventListener('submit', weatherSearch)


