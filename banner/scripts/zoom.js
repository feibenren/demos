import "../styles/zoom.scss";
//获取dom对象
let box = document.querySelector(".box");
let thumb = box.getElementsByTagName("img")[0];
let pointer = document.querySelector(".pointer");
let zoom = document.querySelector(".zoom");
let rate = 0;
let bigLoaded=false;
pointer.style.display = "none";

box.addEventListener("mouseover", function() {
  pointer.style.display = "block";
  if(!bigLoaded){
    load_big();//加载大图
  }
  box.addEventListener("mousemove", point_mousemove);
});
box.addEventListener("mouseout", function() {
  pointer.style.display = "none";
  box.removeEventListener("mousemove", point_mousemove);
});

function point_mousemove(ev) {
  let left_val = ev.clientX - box.offsetLeft - pointer.offsetWidth / 2;
  let top_val = ev.clientY - box.offsetTop - pointer.offsetHeight / 2;
  if (left_val < 0) {
    left_val = 0;
  } else if (left_val > box.offsetWidth - pointer.offsetWidth) {
    left_val = box.offsetWidth - pointer.offsetWidth;
  }

  if (top_val < 0) {
    top_val = 0;
  } else if (top_val > box.offsetHeight - pointer.offsetHeight) {
    top_val = box.offsetHeight - pointer.offsetHeight;
  }
  pointer.style.left = left_val + "px";
  pointer.style.top = top_val + "px";
  //big img
  if(bigLoaded){
      let scrollLeft=rate*(pointer.offsetLeft);
      let scrollTop=rate*(pointer.offsetTop);
      zoom.scrollLeft=scrollLeft;
      zoom.scrollTop=scrollTop;
  }
}

function big_move() {}

function load_big() {
  //加载大图,获取大图尺寸
  let bigSrc = thumb.dataset.big;
  let big = new Image();
  big.src = bigSrc;
  big.onload = function() {
    //加载图片
    zoom.appendChild(big);
    //计算比率
    rate = big.width / thumb.clientWidth;
    // console.log(rate);
    bigLoaded=true;//设置完成
  };
}


