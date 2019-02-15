//压弹簧模式，只有在松手后才会弹起(执行)
function debounce(fn,atLeast=500){
  clearTimeout(this.timer);
  this.timer=setTimeout(fn,atLeast);
}

//设置一个时间段，一个period能执行一次
function throttle(fn,period=1000){
  if(!this.timeEnd || this.timeEnd < Date.now() ){
    fn();
    this.timeEnd=Date.now()+period;//设置下一轮截止时间
  }else{
    return false;
  }
}

function test(){
  console.log('test');
}
window.onscroll=function(){
  // debounce(test);
  throttle(test);
};

