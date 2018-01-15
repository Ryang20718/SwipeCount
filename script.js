
$("#14").on("click", function() {

    var totalSwipes = 151;
    var d = new Date();
    var m = new Date();
    var month = m.getMonth();
    var day = d.getDate();
    if(month == 0){
    day -= 7;
    totalSwipes = totalSwipes - (day * 2);
    }
    else if(month == 1){
    totalSwipes -= 48;   
    totalSwipes = totalSwipes - ((day + 1) * 2);
    }
    else{
    totalSwipes -= 104; 
    totalSwipes = totalSwipes - ((day + 1) * 2);
    }

var display = "Your total Swipes left should be: " + totalSwipes;
document.getElementById('xSwipes').innerHTML = display;

});

$("#14R").on("click", function() {

var totalSwipes = 14;
var d = new Date();
var day = d.getDay();
totalSwipes -= ((day - 1)*2);
if(day == 0){
    totalSwipes = 2;
}
var display = "Your total Swipes left for this week should be: " + totalSwipes;
document.getElementById('xSwipes').innerHTML = display;

});

$("#19R").on("click", function() {

    var totalSwipes = 19;
    var d = new Date();
    var day = d.getDay();
if(day == 0){
totalSwipes = 2;
}
else if(day == 6){
totalSwipes = 4;
}
else{
totalSwipes -= ((day - 1) * 3) ;
}

var display = "Your total Swipes left for this week should be: " + totalSwipes;
document.getElementById('xSwipes').innerHTML = display;

});

$("#19").on("click", function() {

    var totalSwipes = 203;
    var d = new Date();
    var m = new Date();
    var month = m.getMonth();
    var day = d.getDate();
    if(month == 0){
    day -= 6;
    if(day < 6){
    totalSwipes -= 3;
    totalSwipes -= ((day-3) * 3);   
    }else if (day < 12){
        totalSwipes -= 4;
    totalSwipes -= ((day-4) * 3);  
    }else if (day < 13 ){
        totalSwipes -= 6;
    totalSwipes -= ((day-5) * 3);  
    }else if (day < 14){
        totalSwipes -= 8;
    totalSwipes -= ((day-6) * 3);  
    }else if (day < 20){
        totalSwipes -= 10;
    totalSwipes -= ((day-7) * 3);  
    }else if (day < 21){
        totalSwipes -= 11;
    totalSwipes -= ((day-8) * 3);  
    }else{
        totalSwipes -= 13;
      totalSwipes -= ((day-9) * 3);   
    }
    
    }
    else if(month == 1){
    totalSwipes -= 66;   
    totalSwipes = totalSwipes - ((day + 1) * 2);
    }
    else{
    totalSwipes -= 75; 
    totalSwipes = totalSwipes - ((day + 1) * 2);
    }

var display = "Your total Swipes left should be: " + totalSwipes;
document.getElementById('xSwipes').innerHTML = display;

});




















