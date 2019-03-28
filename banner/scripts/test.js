<<<<<<< HEAD
function* fakeAsync() {
  yield fetch('http://localhost:8080/test.html');
  yield fetch('http://localhost:8080');
}

function myco(arg) {
  let g = arg();
  function next(data){
    let res=g.next();
    if(res.done){
      return res.value;
    }
    res.value.then((data)=>{next(data)});
  }
  return next(g);
}

myco(fakeAsync);
=======
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
>>>>>>> 3ccf99c34bbea701b7224060a135e59dbe5311e2
