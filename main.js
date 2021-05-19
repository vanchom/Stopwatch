var h2 = document.getElementsByTagName("h2")[0],
    start = document.getElementById("start"),
    pause = document.getElementById("pause"),
    stop = document.getElementById("stop"),
    reset =document.getElementById("reset"),
    seconds= 0, minutes =0, hours=0, t=0;

    function add(){
        seconds++;
        if (seconds >=60){
            seconds =0;
            minutes++;
            if(minutes >= 60){
                minutes = 0;
                hours++;
            }
        }
        h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

        timer();
    }
    function timer() {
        
        t = setTimeout(add, 1000);
    }
    
    

    /* Start button */
start.onclick = function(){
    timer(t);
     document.querySelector(".values").style.color = "green";
}

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
    document.querySelector(".values").style.color = "red";
}
/* Clear button */
reset.onclick = function() {
    h2.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    document.querySelector(".values").style.color = "black";
}