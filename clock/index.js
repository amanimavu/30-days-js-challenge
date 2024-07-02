const setSeconds = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  const secondHand = document.querySelector(".second-hand");
  if (secondDegrees === 90) {
    secondHand.classList.remove("tick");
  }
  if (secondDegrees === 96) {
    secondHand.classList.add("tick");
  }
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

const setMinutes = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const minuteHand = document.querySelector(".minute-hand");
  if (minuteDegrees === 90) {
    minuteHand.classList.remove("tick");
  }
  if (minuteDegrees === 96) {
    minuteHand.classList.add("tick");
  }
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
};

const setHours = () => {
  const date = new Date();
  const hours = date.getHours();
  const hourDegrees = (hours / 60) * 360 + 90;
  const hourHand = document.querySelector(".hour-hand");
  if (hourDegrees === 90) {
    hourHand.classList.remove("tick");
  }
  if (hourDegrees === 96) {
    hourHand.classList.add("tick");
  }
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

const setTime = () => {
  setHours();
  setMinutes();
  setSeconds();
};

setTime();
setInterval(setTime, 1000);
