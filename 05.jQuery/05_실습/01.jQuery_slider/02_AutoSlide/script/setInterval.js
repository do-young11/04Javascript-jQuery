//setInterval

/* 
설정한 시간 동안 코드 반복실행 -> 객체 필요없이 사용 가능

setinterval(function(){
    실행코드;
},시간);

setInterval(함수명,시간간격);
*/
$(document).ready(function () {
    //.pager의 초기 설정
    $('.pager li').css('color', 'white');
    $('.pager li').first().css('color', 'green');

    // 함수 최초호출
    // leftMove();

    // $('.main').click(leftmove);

    //자동실행
    // setInterval(leftmove,2000);

    //마우스 올리면 자동실행 멈춤, 떠나면 다시 자동실행
    var autoCall = setInterval(leftmove,3000);

    $('.slide-box').mouseenter(function(){
        // 자동실행 멈춤, 인터벌제거
        clearInterval(autoCall);
    }).mouseleave(function(){
        //자동실행 다시 시작
        autoCall = setInterval(function(){
            leftmove();
            console.log('인터벌 재가동');
        },3000);
        
    });
    

});

/*
함수명 : leftmove
기능 : 슬라이드를 왼쪽(다음) 이동
*/

var page = 0; //현재 슬라이드 인덱스(페이지)를 담을 변수

function leftmove() {

    page++;
    console.log(page);

    //제어문 - 변경된 page값이 적용되기 전에 검사
    if (page===4){
        //2번 슬라이드가 왼쪽으로 이동하는 것을 위해 값을 0으로 리셋
        $('.gallery').css('left',0);

        // 다음 페이지 이동을 위한 page변수값 변경
        //현재 보고 있는 슬라이드는 1번 내용, 2번 슬라이드를 보기 위해 2번 인덱스 번호로 변경
        page = 1;
    };
    
    $('.gallery').animate({
        left: -(1280*page)
    },800);

    //현재 보여지는 슬라이드 페이저 버튼만 컬러 변경
    /* 
    $('#btn'+page).css('color','salmon').siblings().css('color','white');
    if(page===3){
        $('#btn0').css('color','salmon').siblings().css('color','white')
    };
    */

    //페이저 버튼을 모두 초기화
    $('.pager li').css('color','white')
    $('#btn'+page).css('color','green')
    if(page===3){
        $('#btn0').css('color','green')
    };
};
