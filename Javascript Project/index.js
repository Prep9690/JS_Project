function updateTime() {
  const hourText = document.querySelector(".hour-text");
  const minText = document.querySelector(".min-text");
  const secondsText = document.querySelector(".seconds-text");
  const AM_PM = document.querySelector(".AM");

  const TO_DO = document.querySelector(".grid-item2.grab-food > p");
  const GREETINGS = document.querySelector(".grid-item3.grab-food > p");
  const WAKEUP_IMG = document.querySelector(".grid-item4.wakeup-img");

  let fetchHour = new Date().getHours();
  let fetchMins = new Date().getMinutes();
  let fetchSecs = new Date().getSeconds();

  if (fetchHour === 12 || (fetchHour > 12 && fetchHour < 16)) {
    TO_DO.textContent = "LET'S HAVE SOME LUNCH !!";
    GREETINGS.textContent = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    GREETINGS.style.fontSize = "1.2rem";
    WAKEUP_IMG.setAttribute("src", "afternoon.svg");
  } else if (fetchHour === 16 || (fetchHour > 16 && fetchHour < 20)) {
    TO_DO.textContent = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    GREETINGS.textContent = "GOOD EVENING !!";
    WAKEUP_IMG.setAttribute("src", "evening.png");
  } else if (fetchHour === 20 || (fetchHour > 20 && fetchHour < 23)) {
    TO_DO.textContent = "CLOSE YOUR EYES AND GO TO SLEEP";
    GREETINGS.textContent = "GOOD NIGHT !!";
    WAKEUP_IMG.setAttribute("src", "night.svg");
  }

  fetchHour = fetchHour < 10 ? (fetchHour = `0${fetchHour}`) : fetchHour;
  fetchMins = fetchMins < 10 ? (fetchMins = `0${fetchMins}`) : fetchMins;
  fetchSecs = fetchSecs < 10 ? (fetchSecs = `0${fetchSecs}`) : fetchSecs;

  if (fetchHour < 12) {
    AM_PM.textContent = "AM";
    if (fetchHour == "00") {
      hourText.textContent = 12;
      AM_PM.textContent = "AM";
    }
  } else {
    fetchHour = fetchHour - 12;
    hourText.textContent = fetchHour;
    AM_PM.textContent = "PM";
  }

  hourText.textContent = fetchHour;
  minText.textContent = fetchMins;
  secondsText.textContent = fetchSecs;
}
setInterval(updateTime, 1000);
