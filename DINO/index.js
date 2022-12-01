function setDate(){
    var setDate = new Date();
    var setYear = setDate.getFullYear();
    var setMonth = setDate.getMonth()+1;
    var setDay = setDate.getDate();
    var setHour = setDate.getHours();
    var setMinutes = setDate.getMinutes();
    var setSeconds = setDate.getSeconds();
    var settingsEl = document.querySelectorAll('.clock__setting > strong');

    settingsEl[0].textContent = setYear;
    settingsEl[1].textContent = setMonth;
    settingsEl[2].textContent = setDay;
    settingsEl[3].textContent = setHour;
    settingsEl[4].textContent = setMinutes;
    settingsEl[5].textContent = setSeconds;
}
setDate();

var stopState = document.querySelector('.stop-state');
var stopHour = document.querySelector('.stop-hour');
var stopMinutes = document.querySelector('.stop-minutes');
var stopSecond = document.querySelector('.stop-second');
var stopMillisecond = document.querySelector('.stop-milliSecond');
var watchButton = document.querySelector('.button-wrapper');
var startWatch;
var startMilliWatch;
var watch_h = 0;
var watch_m = 0;
var watch_s = 0;
var watch_ms = 0;

function stopWatch(){
    watch_s++;

    if(watch_s < 10){
        watch_s = "0"+watch_s;
    }

    if( watch_s >= 60 ){
        watch_s = 0;
        if(watch_s < 10){
            watch_s = "0"+watch_s;
            s_el.textContent = watch_s;
        }
        watch_m++;

        if(watch_m < 10){
            watch_m = "0"+watch_m;
        }
        stopMinutes.textContent = watch_m;
    }
    stopSecond.textContent = watch_s;
}

function milliWatch(){
    watch_ms++;
    if( watch_ms < 10){
        watch_ms = "0"+watch_ms;
    }
    if( watch_ms == 100 ){
       watch_ms = 0;
    }
    stopMillisecond.textContent = watch_ms;
}

function clean(){
    watch_h = 0, watch_m = 0, watch_s = 0, watch_ms = 0;
    stopHour.textContent = "00";
    stopMinutes.textContent = "00";
    stopSecond.textContent = "00";
    stopMillisecond.textContent = "00";
}

watchButton.addEventListener('click', function(e){
    //if( e.target.className == "button__timer--start" ){  이유가뭐지
    if( e.target.textContent == "시작" ){
        stopState.textContent = "state : 시작";
        startWatch = setInterval(stopWatch,1000);
        startMilliWatch = setInterval(milliWatch,10);
    }
    
    //if( e.target.className == "button__timer--stop" ){  이유가뭐지
    if( e.target.textContent == "정지"){
        stopState.textContent = "state : 정지";
        clearInterval(startWatch);
        clearInterval(startMilliWatch);
    }
    
    //if( e.target.className == "button__timer--reset" ){  이유가뭐지
    if( e.target.textContent == "초기화" ){
        stopState.textContent = "state : 초기화";
        clean();
    }
});

setInterval( setDate , 1000 );