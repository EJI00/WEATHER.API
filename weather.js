function displayresult(){
    var city = document.getElementById("city").value;
    var apikey='f442d8ba2a3a9efe241fe2191d783fc8';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    +city+ '&appid=' +apikey+ '&units=metric')
    .then(response => response.json())
    .then(data => {
        var t = data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}
