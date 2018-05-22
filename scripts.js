$(document).ready(function() {
    
    var dateTime = new Date();
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var Hour = dateTime.getHours();
    var Minute = dateTime.getMinutes();
    var dayLight = " ";
    var latitude;
    var longitude;
    
    
// The following is the code for the day of the week and date
    $("#day-date").ready(function upDate() {
        var date = dateTime.getDate();
        var Day = dateTime.getDay();
        var Month = dateTime.getMonth();
        
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
    $("#time").ready(function updateTime(){
        
        
        if (Hour > 0 && Hour <= 11){
            dayLight = " AM";
        } else {
            dayLight = " PM";
        }
        
        
        if (dateTime.getHours() == 0){
            Hour = 12;
            dayLight = " AM";
        } else if (dateTime.getHours() >= 13){
            Hour = dateTime.getHours() - 12;
        };
        
        if(Minute < 10){
            Minute = "0" + Minute;
        }
        
        $("#hour").text(Hour + ":" + Minute + dayLight);
        
        
    });
    
    
// The following is the code for the location
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
        var callingWeather = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
// The following is the code for weather

        $.getJSON(callingWeather, weatherStuff);
        
        function weatherStuff(weatherData){
            var Temp = weatherData.main.temp;
            var NAME = weatherData.name;
            var status = weatherData.weather[0].main;
            var icon = weatherData.weather[0].icon;
            
           $(".temperature").append(Math.round((Temp * (9/5)) +32) + '&#8457;');
           $(".location").append(NAME);
           $(".status").append(status);
           $(".icon").attr("src",icon);
        }
    });
}

        
    
    
    
    
});