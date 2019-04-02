import '../styles/test.scss';

var btn = document.querySelector('.btn1');
var disconect = document.querySelector('.disconect');
var container = document.querySelector('.container');


btn.addEventListener('click', function (ev) {
    container.innerText='666666';
})

var observer = new MutationObserver(function (mutationRecord, observer) {
    console.log(mutationRecord);
})


var observerOptions = {
    childList: true, // 观察目标子节点的变化，添加或者删除
    attributes: true, // 观察属性变动
    characterData: true // 默认为 false，设置为 true 可以观察后代节点
}

observer.observe(container,observerOptions)

disconect.addEventListener('click',(ev)=>{
    observer.disconnect();
});