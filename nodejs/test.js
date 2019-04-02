setImmediate(function(arg){
    console.log(setImmediate,arg);
},'canshu')
setTimeout(() => {
    console.log('setTimeout')
}, 0);

