var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var APIKey = "86a71cf067d55380fb197a33eaf00e38";

function convertion(val) {
   
    return (val).toFixed(2); // Keep two decimal places for Celsius
}

btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod == '404') {
                alert('You entered the wrong city name');
                return;
            }

            var nameval = json['name'];
            var descrip = json['weather'][0]['description'];
            var temperature = json['main']['temp'];
            var windspeed = json['wind']['speed'];
            var hval = json['main']['humidity'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + ' \u2103</span>';
            description.innerHTML = 'Sky Conditions: <span>' + descrip + '</span>';
            wind.innerHTML = 'Wind Speed: <span>' + windspeed + ' km/h</span>';
        })
        .catch(err => alert('There was an error fetching the weather data.'));
});
