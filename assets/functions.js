  $(document).ready(function() {
    $('#cityBtn').click(function() {
        var city = $('#citySearch').val();  
        if(city!="") {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&apikey=df520520403dc5e0455758f5b172bc5e&units=imperial',
                //cityName: city,
                method:"GET",
            })
            
            .then(function(data) {
               console.log(data.main.temp)
               var display = show(data);
               $('#show').html(display);
               $('#city').val('');
            })
        }else{
            $('#errorMsg').html("Please enter a city")
        }

    })

 });

function show(data) {
     document.write(
            '<h2><strong>Current Weather for: ' + data.name + ", " + data.sys.country + '</h2>'+
            '<h4><strong>Weather: </strong>' + data.weather[0].main + '</h4>' +
            '<h4><strong>Temperature: </strong>' + data.main.temp + '</h4>' +
            '<h4><strong>Wind Speed: </strong>' + data.wind.speed + '</h4>' +
            '<h4><strong>Humidity: </strong>' + data.main.humidity + '</h4>');
};
