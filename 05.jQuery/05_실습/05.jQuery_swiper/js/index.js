//index.js

$(document).ready(function(){
    //swiper 플러그인 적용하기
    var swiper = new Swiper('.swiper-container',{
        pagination: {
            el: '.swiper-pagination',
            //el = elements -> 요소
            type: 'fraction'
            //페이지 숫자 표기
            //bullet : 원 페이저
        },
        loop: true, //롤링 반복
        speed: 800, //다음 슬라이드로 넘어가는 시간
        // effect: 'cube' //슬라이드 되는 모양
        // effect: 'coverflow'
        effect: 'flip'
    });

});

/* 
pagination type
- bullet 원 (기본값)
- fraction 숫자

effect
- slide : 슬라이드 효과 (기본값)
- fade : 페이드 효과
- cube : 입체 사각형
- coverflow
- flip : 접히는 효과

loop (슬라이드 반복 설정)
- false : 루프없음 (반복없음)
- true : 무한루프(반복)
*/