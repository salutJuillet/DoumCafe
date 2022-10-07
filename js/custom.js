'use strict';

function openNav(){
    document.getElementById("mynav").style.left="0%";
}
function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}


////슬라이더
var ind = 1;
viewSlide(ind); //처음에 슬라이드 하나 보이게


//스크롤 보였다 안 보였다하게 만들려고
//scrollingElement.scrollTop: 스크롤 된 곳의 위치값
window.addEventListener('scroll',function(){
    let nowScroll = document.scrollingElement.scrollTop;
    if(nowScroll > 600){
        document.getElementById('top').style.display = 'flex';
    }
    if(nowScroll == 0){
        document.getElementById('top').style.display = 'none';
    }
})


//카페 인기글 날짜 변하는거
function gTime(){
    var dt = new Date();
    var yr = dt.getFullYear();
    var mth = dt.getMonth()+1;
    var gdt = dt.getDate();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();

    
    document.getElementsByClassName('dt')[0].innerHTML = yr+ "."+mth+"."+gdt+"<span>"+hour+"시"+min+"분"+sec+"초</span>";
}


function pSlide(n){
    viewSlide(ind += n);
}

setInterval(autoSlide,5000);
setInterval(gTime, 1000);

function viewSlide(n){
    var i, slides;
    slides = document.getElementsByClassName("slidein");

    if(n>slides.length){ ind = 1;}
    if(n<1){ ind = slides.length};
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
        slides[i].className = "slidein"; //none에서는 class에 slidein만
    }
    
    var elements = document.getElementsByTagName('li');
    //class에 active가 전부 추가되기 전에 먼저 class에서 active를 없애줘야 함!
    // for(i=0; i<4; i++){
    //     elements[i].classList.remove('active');
    // }
    // var ct = Math.floor(Math.random()*4);
    // console.log(ct);
    // elements[ct].className = "active";
        

    slides[ind-1].style.display="block";
    slides[ind-1].className += " fade"; //block에서는 class에 fade 추가
}

//시간이 지나면 슬라이드가 자동으로 넘어가게
function autoSlide(){
    ind++;
    viewSlide(ind);
}
//위에 viewSlide 함수에서 실행되니까 간단하게 함수짜면 됨



//니니즈 그리기

//카페 지원 안내 이미지 변환
function vl(n){
    let page = document.getElementById('page');
    let supportBoxa = document.querySelector('.support-box');
    let supportBoxb = document.querySelector('.support-box');
    if(n){
        //page 0의 action을 지우고 support-boxa의 action을 지운다.
        //page 1에 action을 넣고 suport-boxb에 action을 추가한다.
        page.children[0].classList.remove('action');
        page.children[1].classList.add('action');
        supportBoxa.classList.remove('act');        
        supportBoxb.classList.add('act');        
    }else{
        page.children[1].classList.remove('action');
        page.children[0].classList.add('action');
        supportBoxb.classList.remove('act');        
        supportBoxa.classList.add('act');        
    }
}