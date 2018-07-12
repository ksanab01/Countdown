function initializeClock(id, endtime, currentdate, expiredmessage, currentmessage, isActive) {
    var prevTime = {};
    prevTime.total = endtime - currentdate;

    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var days = clock.querySelector('#dayNum');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var message = clock.querySelector('#message');
    var fulldayAfter = (currentdate >= (endtime + 24 * 60 * 60 * 1000));
    var displayTimer = isActive = typeof isActive !== 'undefined' ? isActive : 0;

    if(displayTimer === 1) {
        clock.style.display = 'inline-block';
        message.innerHTML = currentmessage;
    }

    function updateClock() {
        var curTime = getTimeRemaining(prevTime.total);

        daysSpan.innerHTML = curTime.days;
        hoursSpan.innerHTML = ('0' + curTime.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + curTime.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + curTime.seconds).slice(-2);


        if (curTime.days <= 0) {
            days.style.display = "none";
        }

        if (curTime.days <=0 && curTime.hours <=0 && curTime.minutes <= 0 && curTime.seconds <= 0) {
            message.innerHTML = expiredmessage;
            hoursSpan.innerHTML = '00';
            minutesSpan.innerHTML = '00';
            secondsSpan.innerHTML = '00';
        }

        prevTime = curTime;
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);

    if (fulldayAfter === true) {
        clock.style.display = "none";
        clearInterval(timeinterval);
    }

}