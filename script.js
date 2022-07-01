setInterval(() => {
  const hours = document.querySelector("#hr");
  const minutes = document.querySelector("#mn");
  const seconds = document.querySelector("#ss");
  const ampm = document.querySelector("#ampm");

  let normalTime = new Date().getHours();

  ampm.textContent = normalTime > 12 ? "AM" : "PM";
  if (normalTime > 12) {
    normalTime -= 12;
  }
  hours.textContent = hours.textContent = normalTime;
  minutes.textContent = minutes.textContent = new Date().getMinutes();
  seconds.textContent = new Date().getSeconds();

  if (hours.textContent < 10) {
    hours.textContent = "0" + hours.textContent;
  }
  if (minutes.textContent < 10) {
    minutes.textContent = "0" + minutes.textContent;
  }
  if (seconds.textContent < 10) {
    seconds.textContent = "0" + seconds.textContent;
  }
}, 1000);
