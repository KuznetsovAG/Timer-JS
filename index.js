const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return () =>
    (timer = setInterval(() => {
      let seconds = timeSecond % 60;
      let minutes = (timeSecond / 60) % 60;
      let hour = (timeSecond / 60 / 60) % 60;
      if (timeSecond <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
        timerEl.innerHTML = "hh:mm:ss";
      } else {
        let strTimer = `${
          Math.trunc(hour) < 10 ? `0${Math.trunc(hour)}` : Math.trunc(hour)
        }:${
          Math.trunc(minutes) < 10
            ? `0${Math.trunc(minutes)}`
            : Math.trunc(minutes)
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
        timerEl.innerHTML = strTimer;
      }
      --timeSecond;
    }, 1000));
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  parseInt(inputEl.value);
});

buttonEl.addEventListener("click", () => {
  timeSecond = inputEl.value;
  animateTimer(timeSecond);

  inputEl.value = "";
});
