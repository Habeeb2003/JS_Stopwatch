let screen = document.getElementById('screenSect')
let pAndpBtn = document.getElementById('playAndPause')
pAndpBtn.innerHTML = "Play"
let minDisp = document.getElementById('Min')
let secDisp = document.getElementById('Sec')
let milliDisp = document.getElementById('milli')
minDisp.innerHTML= "0"
secDisp.innerHTML = "00"
milliDisp.innerHTML = "00"
let secPerMinute = "00"
let newMilliVal, myset 
let isPlayPressed = false;
let isPausedPressed = false;
let my
let a = 0
let milliInterval = 10

function Play (value) {
    if (value == "Reset") {
        clearInterval(my)
        secDisp.innerHTML = "00"
        minDisp.innerHTML = "0"
        milli.innerHTML = "00"
        pAndpBtn.innerHTML = "Play"
        return
    }
    if (value == "stop") {
        clearInterval(my)
        return  
    }
    if (value == "Pause") {
        clearInterval(my)
        newMilliVal = milli.innerHTML
        pAndpBtn.innerHTML = "Play"
        isPausedPressed = true;
        return
    }
    if ( value == "Play") {
        milli.innerHTML = 99
        pAndpBtn.innerHTML = "Pause"
        isPlayPressed = true;
        if (isPausedPressed == true) {
            milli.innerHTML = newMilliVal
        }
    }
    if (isPlayPressed) {
    }
    show()
}
function show(params) {
    my = setInterval(() => {
        if (secDisp.innerHTML == 60) {
            minDisp.innerHTML ++ 
            secDisp.innerHTML = secPerMinute
            clearInterval(my)
            show()
            return
        }
        if (a == 1000) {
            secDisp.innerHTML ++
            milli.innerHTML = 99
            clearInterval(my)
            a = 0
            show()
            return
        }
        a += milliInterval
        milli.innerHTML --
    }, milliInterval);
}