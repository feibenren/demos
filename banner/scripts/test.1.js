async function getApis(){
  let res1=await fetch('http://rap2api.taobao.org/app/mock/26061/example/1537868953603');
  console.log(res1);
  let res2=await fetch('http://rap2api.taobao.org/app/mock/26061/index');
  console.log(res2);
}
getApis();