let lazyloads = document.querySelectorAll(".lazyload");
//转换成数组
lazyloads = Array.prototype.slice.call(lazyloads);

//获得元素到page顶部的距离
function top(ele) {
  if (ele.offsetParent) {
    return ele.offsetTop + top(ele.offsetParent.offsetTop);
  } else {
    //body
    return 0;
  }
}

function load() {
  // console.log(top(lazyloads[6]));
  lazyloads.forEach(item => {
    if (item.isLoaded) {
      return;
    }
    if (
      top(item) <
      document.documentElement.scrollTop + document.documentElement.clientHeight
    ) {
      item.src = item.dataset.src;
      item.isLoaded = true;//标记，提高性能
    }
  });
}
load();
document.onscroll = load;
