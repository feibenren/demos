function* gen(){
  yield 1;
  yield 2;
}
let g=gen();
console.log(g.next())//1
console.log(g.next())//2

async function async_fn(){
  let temp = await 1;
  await 2;
}

let af=async_fn();

af.then(data=>console.log(data));

