$(document).ready(function(){
    var birth_date = new Date('May, 28, 2022').getTime();
    
    var years,months,days, hours, minutes, seconds;
    var ageCount = document.getElementById('counter');
    setInterval(function(){
    
        var current_date = new Date().getTime();
        var total_sec =(current_date-birth_date) / 1000;
        years=parseInt(total_sec/(86400*30*12));
        var second_left=total_sec%(86400*30*12);
        months=parseInt(second_left/(86400*30));
        second_left=second_left%(86400*30);
        days=parseInt(second_left/86400);
        second_left=second_left%(86400);
        hours=parseInt(second_left/3600);
        second_left=second_left%3600;
        minutes=parseInt(second_left/60);
        seconds=parseInt(second_left%60);
    
    
         ageCount.innerHTML=years+' Years '+months+' Months '+days+' Days '+hours+
        ' Hours '+minutes+' Minutes '+seconds+' Seconds';
    
    },500);
    
    });