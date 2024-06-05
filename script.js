function showtime(){
    var date = new Date() ;
    var hour =date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >=12 ? 'PM':'AM';
    hour = hour % 12;
    hour=hour?hour: 12;
    hour = (hour<10)?'0'+hour :hour;
    min = (min<10)?'0'+min:min;
    sec = (sec<10)?'0'+sec :sec;
    var time =hour +":" + min + ":"+ sec + '' + ampm;
    document.getElementById('clock').innerHTML=time;
    setTimeout(showtime,1000);
}