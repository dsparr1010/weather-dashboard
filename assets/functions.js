  $(document).ready(function() {


    $('#cityBtn').on('keypress click', function search(e) {
        e.preventDefault()
        if (e.which === 13 || e.type === 'click') {
        var city = $('#citySearch').val();  
        if(city!="") {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&apikey=df520520403dc5e0455758f5b172bc5e&units=imperial',
                method:"GET",
            })  
            .then(function(data) {
               var display = show(data);
               $('#show').html(display);
               $('#city').val('');
                date(data)
            })
        }else{
            $('#errorMsg').html("Please enter a city")
        }

        var cityObj = {
        name: city
          }
          searchedCities.push(cityObj)
          localStorage.setItem('searchedCities', JSON.stringify(searchedCities))

          $('#citySearch').empty();

          if (searchedCities.length === 10) {
              console.log('worked')
              searchedCities.shift();
          }
          appendSearches()

    }});

    var searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || []

    function appendSearches() {
        $("#showSearch").empty();
        for (x = 0; x < searchedCities.length; x++) {
        var el = $("<li>")
        el.addClass("list-group-item")
        el.attr("data-city", searchedCities[x].name)
        $("#showSearch").prepend(el)
        
        //$(this).data()
        el.click(function(e) {
            recall(e.target.innerText)
        });
        el.append(searchedCities[x].name);
    }}

    function recall(cityName) {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + 
                cityName + '&apikey=df520520403dc5e0455758f5b172bc5e&units=imperial',
                method:"GET",
            })  
            .then(function(data) {
            var display = show(data);
            $('#show').html(display);
            $('#citySearch').empty();
            })
    }
    function show(data) {
        $('#cityCard').html(
            '<h2><strong>Current Weather for: ' + data.city.name + ", " + data.city.country + '</h2>'+  
            '<h4><strong>Weather: </strong>' + data.list[0].weather[0].description + '<img src=' + data.list[0].weather[0].icon + ' /></h4>' + //icon not showing
            '<h4><strong>Temperature: </strong>' + data.list[0].main.temp + '\xB0F'+ '</h4>' +
            '<h4><strong>Wind Speed: </strong>' + data.list[0].wind.speed + '</h4>' +
            '<h4><strong>Humidity: </strong>' + data.list[0].main.humidity + '</h4>'
        )};

    function date(data){
        $('#test').empty();
        for (i = 0; i <= 45; i+=8) {
        var date = new Date(data.list[i].dt * 1000)
        console.log(date.toISOString())
        console.log(data.list[i].main.temp)
        var para = $("<p>")
        para.html(date + data.list[i].main.temp +'\xB0F')
        $('#test').append(para)
        }
    }

    }); //ends doc ready function