$(document).ready(function() {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var latitude;
    var longitude;
     
    
// The following is the code for the day of the week and date
    $("#day-date").ready(function upDate() {
        var Time = new Date();
        var date = Time.getDate();
        var Day = Time.getDay();
        var Month = Time.getMonth();
        
        for(var i = 0; i < days.length; i++){
            if(Day - 1 == i){
                var todayWeekDay = days[Day - 1];
            };
        };
        
        for(var j = 0; j < months.length; j++){
            if(Month == j){
                var todayMonth = months[Month];
            };
        };

        var todayDate = todayWeekDay + ", " + todayMonth + " " + date;
        $("#day-date").text(todayDate);
        
    });
    
// The following is the code for the hour update

    $("#hour").ready(function updateTime(){
        var Time = new Date();
        var dayLight;
        var Hour = Time.getHours();
        var Minute = Time.getMinutes();
            if (Minute < 10){
                Minute = "0" + Minute;
            }
            
            if (Time.getHours() >= 12){
                dayLight = " PM";
            } else if (Time.getHours() == 0) {
                Hour = 12;
                dayLight = " AM";
            } else {
                dayLight = " AM";
            }
            
            if (Time.getHours() >= 13){
                Hour = Time.getHours() - 12;
            }
        
        $("#hour").text(Hour + ":" + Minute + dayLight);
            setTimeout(function(){updateTime()}, 500);
    });
    
    
// The following code calls the
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            
// The following code calls the weather API using the latitude and Longitude

        var callingWeather = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
        
        $.getJSON(callingWeather, weatherStuff); //this is the API caller (address, and function to be run)
        
            function weatherStuff(weatherData){
                var Temp = weatherData.main.temp;
                var NAME = weatherData.name;
                var status = weatherData.weather[0].main;
                var Conditions = weatherData.weather[0].id;
        
// After we call the address and get its values we output those values to the HTML
                $(".temperature").append(Math.round((Temp * (9/5)) +32) + '&#8457;');
                $(".location").append(NAME);
                $(".status").append(status);

//Here is the code switching out the background image depending on the ID values inside status
               
                if (Conditions >= 200 && Conditions < 300){
                    $("body").css({"background":"url(../WeatherApp/weatherImage/Thunder.jpg)"});
                } else if (Conditions >= 300 && Conditions < 400) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/lightRain.jpg)"});
                } else if (Conditions >= 500 && Conditions < 600) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/Rainy.jpeg)"});
                } else if (Conditions >= 600 && Conditions < 700 && Conditions !== 602) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/Snow.jpg)"});
                } else if (Conditions == 602) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/snowSpecial.jpg)"});
                } else if (Conditions >= 700 && Conditions < 800) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/fog.jpg)"});
                } else if (Conditions >= 801 && Conditions < 805) {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/lightcloudy1.jpg)"});
                } else {
                    $("body").css({"background":"url(../WeatherApp/weatherImage/clear.jpg)"});
                }

//Here is the button toggle between Fahrenheit and Celsius
                
                $(".btn").click(function() {
                    var button = $(this);
                   
                    if (button.text() == "Show Celsius"){
                        $(".temperature").html(Math.round(weatherData.main.temp) + '&#8451;');
                        $(".btn").text("Show Fahrenheit");
                    } else if (button.text() == "Show Fahrenheit"){
                        $(".temperature").html(Math.round((Temp * (9/5)) +32) + '&#8457;');
                        $(".btn").text("Show Celsius");
                    }
                });
            }
        });
    }
});