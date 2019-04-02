<<<<<<< HEAD
var obj={
  c:1
}

let count=0;
obj[Symbol.iterator]=function(){
  return {
   next:function(){
    count ++;
    if(count > 10){
      return {
        value:null,
        done:true,
      }
    }else{
      return {
        value:count,
        done:false
      }
    }
   }
  }
}

for(let value of obj){
  console.log(value);
}
=======
async function getApis(){
  let res1=await fetch('http://rap2api.taobao.org/app/mock/26061/example/1537868953603');
  console.log(res1);
  let res2=await fetch('http://rap2api.taobao.org/app/mock/26061/index');
  console.log(res2);
}
getApis();
>>>>>>> 3ccf99c34bbea701b7224060a135e59dbe5311e2
