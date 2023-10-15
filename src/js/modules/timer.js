const timer = (deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const getZero = (num) => {
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    const setClock = (endtime) => {

        const days = document.querySelector("#days"),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";

                clearInterval(timeInterval);
            }
        }
    }

    setClock(deadline);
};

export default timer;