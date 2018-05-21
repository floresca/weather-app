$(document).ready(function() {
    
    var dateTime = new Date();
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    $(".time").ready(function updateTime() {
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
        
        // The following is the update code for the hours 
        var Hour = dateTime.getHours();
        var Minute = dateTime.getMinutes();
        var dayLight = " ";
        
        if (Hour > 0 && Hour <= 11){
            dayLight = " AM";
        } else {
            dayLight = " PM";
        }
        
        if (dateTime.getHours() == 0){
            Hour = 12;
            dayLight = "AM";
        } else if (dateTime.getHours() >= 13){
            Hour = dateTime.getHours() - 12;
        };
        
        if(Minute < 10){
            Minute = "0" + Minute;
        }
        
        var todayHour = Hour + ":" + Minute + dayLight ;
        $("#hour").text(todayHour);
        
        // setInterval(updateTime, 1000);
        
    });

    
    

    //   $.getJSON("/json/cats.json", function(json) {
    //     $(".message").html(JSON.stringify(json));
    //     });

});