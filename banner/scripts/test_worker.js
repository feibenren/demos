let xhr = new XMLHttpRequest();
let get_url = "http://rap2api.taobao.org/app/mock/117159/example/1542009440817";
// get_url = "http://localhost:8080/images/bg.jpg";
let post_url = "http://rap2api.taobao.org/app/mock/117159/post_test";

xhr.open("get", get_url);
xhr.addEventListener('load',function(ev){
    postMessage(xhr.responseText);
});

xhr.send();
