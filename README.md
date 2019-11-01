# weather-dashboard
a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities

Intro: 
    I created a webpage that generates weather information for any city. The application features HTML, Bootstrap and Bulma CSS Frameworks, and Javascript/jQuery. The application runs in the browser. Elements of the page are responsive.

Features: 
    Bootstrap 4 and Bulma were used to create buttons and format much of the page. Utilizing JavaScript/jQuery, the user is to type in a city of choice to get weather and UV information; otherwise user is alerted and no functions are executed. Upon click of "Search" button, an ajax call is requested from the Open Weather Map API. Once request is successful, functions are executed to store and display data through use of DOM created elements. Searched for cities are appended to page, as well as localStorage. On click of listed city, another ajax call is requested, and city weather data is displayed for that city. Latitude and longitude coordinates of searched city are defined in variables. The variables are used an ajax call to another Open Weather API to receive UV index of the searched city.