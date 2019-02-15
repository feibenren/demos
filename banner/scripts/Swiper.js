class Swiper {
  constructor(container, config) {
    //绑定this
    this.move = this.move.bind(this);
    this.prevFn = this.prevFn.bind(this);
    this.nextFn = this.nextFn.bind(this);
    //初始化
    this.container = document.querySelector(container); //包裹容器
    if (!this.container) {
      console.error("container不存在");
      return;
    }
    this.prev = this.container.querySelector(config.prev); //上一个
    if (!this.prev) {
      console.error("prev不存在");
      return;
    }
    this.next = this.container.querySelector(config.next); //下一个
    if (!this.next) {
      console.error("next不存在");
      return;
    }
    this.active = config.active || 0; //当前active
    this.width = parseInt(getComputedStyle(this.container).width); //容器宽度
    this.wrapper = this.container.querySelector(".wrapper"); //包裹层
    this.items = this.wrapper.children; //items
    // console.log('this.wrapper.children',this.wrapper.children);
    this.count = this.wrapper.childElementCount;
    //复制前后两个
    console.log(this.wrapper.firstElementChild);
    let first = this.items[0];
    let last = this.items[this.count - 1];
    this.wrapper.insertBefore(last.cloneNode(true), this.items[0]);
    this.wrapper.appendChild(first.cloneNode(true));
    //设置wrapper宽度
    this.wrapper.style.width = this.width * (this.count + 2) + "px";
    this.wrapper.style.left = -this.width + "px";
    //事件处理函数
    this.prev.addEventListener("click", this.prevFn);
    this.next.addEventListener("click", this.nextFn);
  }
  //运动函数
  move() {
    clearInterval(this.t);
    console.log("move...");
    let target=this.active*this.width;//目标值
    let current=parseInt(this.wrapper.style.left);//当前值
    this.t = setInterval(function(){
        
    }, 100);
  }
  //上一页事件处理函数
  prevFn() {
    this.active--;
    this.move();
  }
  //下一页事件处理函数
  nextFn() {
    console.log("next...");
    this.active++;
    this.move();
  }
}

export default Swiper;
