import "../styles/waterfall.scss";
const column=4;
const box=document.querySelector('.box');
const columHeight=[0,0,0,0];//存放4个colum的高度
let imgList = [
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_01.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_02.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_03.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_04.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_05.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_06.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_07.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_08.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_09.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_10.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_11.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_12.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_13.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_14.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_15.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_16.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_17.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_18.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_19.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_20.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_21.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_22.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_23.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_24.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_25.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_26.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_27.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_28.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_29.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_30.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_31.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_32.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_33.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_34.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_35.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_36.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_37.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_38.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_39.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_40.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_41.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_42.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_43.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_44.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_45.jpg",
  "https://5g-lianqiwenhuaw-cn.oss-cn-shanghai.aliyuncs.com/images/img_46.jpg"
];

function loadImg(url) {
  return new Promise(function(resolve, reject) {
    let img = new Image();
    img.src = url;
    img.onload=function(){
        resolve(img)
    }
    img.onerror=function(){
        reject('报错啦')
    }
  });
}

imgList.forEach((url,index)=>{
    loadImg(url)
    .then((img)=>{
        let colum_num=index%4;
        box.appendChild(img);
        img.style.left=(colum_num)*25+'%';
        img.style.top=columHeight[colum_num]+'px';
        columHeight[colum_num]+=img.height;
        console.log(index,img.height);
    }).catch(err=>{console.log(err)})
})

