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
        
        
        
    });

    // setInterval(updateTime, 60000);
    

    //   $.getJSON("/json/cats.json", function(json) {
    //     $(".message").html(JSON.stringify(json));
    //     });

});