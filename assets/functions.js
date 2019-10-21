  $(document).ready(function() {
    var searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || []
    $('#cityBtn').click(function() {
        var city = $('#citySearch').val();  
        if(city!="") {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&apikey=df520520403dc5e0455758f5b172bc5e&units=imperial',
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
        //save searches to localStorage
        var cityObj = {
            name: city
          }
          searchedCities.push(cityObj)
          localStorage.setItem('searchedCities', JSON.stringify(searchedCities))

          for (x = 0; x < searchedCities.length; x++) {
            var el = $("<li>")
            el.addClass("list-group-item")
            $("#showSearch").append(el)
            el.append(searchedCities[x].name);
          }
    })
 });

    function show(data) {
        $('#cityCard').html(
            '<h2><strong>Current Weather for: ' + data.name + ", " + data.sys.country + '</h2>'+
            '<h4><strong>Weather: </strong>' + data.weather[0].main + '\xB0F' + '</h4>' +
            '<h4><strong>Temperature: </strong>' + data.main.temp + '</h4>' +
            '<h4><strong>Wind Speed: </strong>' + data.wind.speed + '</h4>' +
            '<h4><strong>Humidity: </strong>' + data.main.humidity + '</h4>'
        )};//append('#cityCard');
