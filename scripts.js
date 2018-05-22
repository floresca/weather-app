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
    
    
// The f
            
            
            
    
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