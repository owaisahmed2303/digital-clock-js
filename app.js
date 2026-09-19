var h = document.getElementById('span-hours');
var m = document.getElementById('span-minutes');
var s = document.getElementById('span-seconds');
var am_pm = document.getElementById('am-pm');
var dayslist=document.querySelectorAll('#days-list li');

// console.log(dayslist)


function digitalclock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var weekdaysIndex=time.getDay();
   
     weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    
    if (time.getHours() >= 12) {
        am_pm.innerText = 'PM';
    } else {
        am_pm.innerText = 'AM';
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;

    dayslist[weekdaysIndex].style.color='#003bea';
    dayslist[weekdaysIndex].style.fontWeight='bold';
    
    

}

setInterval(digitalclock, 1000);





