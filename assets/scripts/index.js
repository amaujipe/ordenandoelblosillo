let countDownDom = document.getElementById('countDown');

const timer = ( timeInMili ) => {
    const countDown = setInterval( () => {
        let floatHours = timeInMili / (1000 * 60 * 60);
        let hours = Math.floor(floatHours);
        let floatMinutes = ( floatHours - hours ) * 60;
        let minutes = Math.floor(floatMinutes);
        let floatSeconds = ( floatMinutes - minutes ) * 60;
        let seconds = Math.floor(floatSeconds);
        countDownDom.innerText = (
            ((hours < 10) ? `0${hours}` : hours) + ":" +
            ((minutes < 10) ? `0${minutes}` : minutes) + ":" +
            ((seconds < 10) ? `0${seconds}` : seconds) + ""
        );
        timeInMili -= 1000;
        if( timeInMili < 0 ) {
            clearInterval( countDown );
        }
    }, 1000);
}

const getCountDownTimeInMili = () => {
    let currentTime = new Date().getTime()
    let midnight = new Date().setHours(23,59,59);
    let countDownTimeInMili = (midnight - currentTime) ;
    return countDownTimeInMili;
}

timer( getCountDownTimeInMili() );