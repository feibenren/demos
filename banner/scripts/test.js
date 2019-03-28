function* fakeAsync() {
  yield fetch('http://localhost:8080/test.html');
  yield fetch('http://localhost:8080');
}

function myco(arg) {
  let g = arg();
  function next(data){
    let res=g.next();
    if(res.done){
      return res.value;
    }
    res.value.then((data)=>{next(data)});
  }
  return next(g);
}

myco(fakeAsync);
