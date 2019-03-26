import "../styles/test.scss";
let box = document.querySelector(".box");
let item = document.querySelector(".item");
let width = item.offsetWidth;
let touch = null;
let lastTimestamp = 0;
let lastScreenX = 0;
let lastScreenY = 0;
box.style.transform = `translateX(-100px)`;
document.body.addEventListener("touchstart", function(ev) {
  touch = ev.touches[0];
  lastScreenX = touch.ScreenX;
  lastScreenY = touch.ScreenY;
  lastTimestamp = ev.timeStamp;
});
document.body.addEventListener("touchmove", function(ev) {
  console.log(touch);
  if (ev.timeStamp - lastTimestamp < 300) {
    return;
  }
});

document.body.addEventListener("touchend", function(ev) {
  touch = null;
  lastTimestamp = 0;
  lastScreenX = 0;
  lastScreenY = 0;
});
