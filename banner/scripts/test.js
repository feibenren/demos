'use strict'

var obj={};
console.log(obj);
Object.defineProperty(obj,'name',{
  value:2,
});
Object.defineProperty(obj,'name',{
  writable:false
});
console.log(obj);