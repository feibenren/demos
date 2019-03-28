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