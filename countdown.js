function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(endtime) {
  function updateClock() {
    const t = getTimeRemaining(endtime);

    document.getElementById("app").innerHTML = `
      
    <div>
        <div class="days"><p>${("0" + t.days).slice(-2)} days</p></div>
        <div class="hours"><p>${("0" + t.hours).slice(-2)} hours</p></div>
        <div class="minutes"><p>${("0" + t.minutes).slice(-2)} minutes</p></div>
        <div class="seconds"><p>${("0" + t.seconds).slice(-2)} seconds</p></div>
      </div>
    `;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const pubTime = new Date("April 12 2021 19:00:00 GMT");
initializeClock(pubTime);
