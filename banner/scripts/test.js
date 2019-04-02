<<<<<<< HEAD
import '../styles/test.scss';

var btn = document.querySelector('.btn1');
var disconect = document.querySelector('.disconect');
var container = document.querySelector('.container');


btn.addEventListener('click', function (ev) {
    container.innerText='666666';
})
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
function* fakeAsync() {
  yield fetch('http://localhost:8080/test.html');
  yield fetch('http://localhost:8080');
}
>>>>>>> 602104d0d2d07e6c4e8c5f71395b2942f71c5640

var observer = new MutationObserver(function (mutationRecord, observer) {
    console.log(mutationRecord);
})


var observerOptions = {
    childList: true, // 观察目标子节点的变化，添加或者删除
    attributes: true, // 观察属性变动
    characterData: true // 默认为 false，设置为 true 可以观察后代节点
}

<<<<<<< HEAD
observer.observe(container,observerOptions)

disconect.addEventListener('click',(ev)=>{
    observer.disconnect();
});
=======
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
>>>>>>> 37572f0f844e80a8380d2b05d27ebc3e29577e50
>>>>>>> 602104d0d2d07e6c4e8c5f71395b2942f71c5640
