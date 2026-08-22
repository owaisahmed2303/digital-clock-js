var h = document.getElementById('span-hours');
var m = document.getElementById('span-minutes');
var s = document.getElementById('span-seconds');
var am_pm = document.getElementById('am-pm');


function digitalclock() {
    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    


    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
    

    
    if (hours >= 12 ) {
        am_pm.innerText = 'pm';
        h.innerText = hours - 12;
    }
    else{
        am_pm.innerText = 'am';
        if(hours==0){
      
        hours=12;
    }
    }


}

setInterval(digitalclock, 1000);





