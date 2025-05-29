<<<<<<< HEAD
//sllideChange_Horizontal

=======
//slideChange_Horizontal

///전역변수//////////////////////
var pageCount = 0; //현재 페이지 번호 (첫 페이지 0 = 초깃값)
var total; //총 페이지 갯수, 페이지 갯수가 변경될 가능성이 없으면 상수선언
var stat = 0; //이벤트 핸들러 실행 제어 (0-실행전/허용, 1-실행중/잠금)


$(function(){

    //총 페이지 갯수
    total = $('.page').length;
    console.log('페이지 갯수'+total);

    //마우스 휠 이벤트
    $(document).on('mousewheel DOMMouseScroll',function(){

        //이벤트 핸들러 제어
        if(stat===1){
            console.log('스크롤 잠금');    
            return false
        };
        stat=1;

        //발생한 이벤트 객체 정보
        var evt = window.event; //자바스크립으로 윈도우객체 선택(window -> 자바스크립트 객체)
        console.log(evt);

        //delta값 -> 휠 이동 방향 확인
        var delta = evt.wheelDelta? evt.wheelDelta: evt.delta;
        console.log('delta 값'+delta);

        //파이어폭스 설정
        var browserInfo = navigator.userAgent;
        console.log(browserInfo);
        if(/Firefox/i.test(browserInfo)){
            delta = -evt.detail;
        };

        //이동방향 설정

        //현재 페이지 -> pageCount 변수값 변경 -> if else문 사용
        if(delta>0){
            //휠 아래 -> 음수 다음페이지(오른쪽페이지)
            pageCount--;
            //마지막 페이지 설정 -> 인덱스번호 초기화
            if(pageCount===-1)pageCount=0;
        }else{
            //휠 위로 -> 양수 이전페이지(왼쪽페이지)
            pageCount++;
            if(pageCount===total)pageCount=total-1;
        };

        //이동위치 값
        //현재 페이지가 문서로부터 떨어진 거리 -> 스크롤 이동값으로 사용
        var pageLeft = $('.page').eq(pageCount).offset().left;
        console.log(pageLeft);

        //페이지 이동
        $('html, body').animate({
            scrollLeft: pageLeft
        },800,function(){
            stat=0; //핸들러 실행 허용 상태로 변경
        });

        //메뉴변경 - 함수 호출
        menuChg(pageCount);

        

    });

    $('.gnb li a, .side-pager li a').click(function(e){
        e.preventDefault(); //a의 href값 기본기능 막기

        //이동, 현재 페이지 일치
        var idx = $(this).parent().index();
        console.log('index값'+idx);
        pageCount = idx; 

        //페이지 이동거리
        // var pageLeft = $('.page').eq(pageCount).offset().left;
        // >> 페이지 인덱스 번호로 거리 구하기

        var pid = $(this).attr('href');
        console.log('클릭한 페이지 위치'+pid);
        var pageLeft = $(pid).offset().left;
        // >>태그 속성을 반환(href값->아이디) 받아 거리구하기

        //이동
        $('html, body').animate({
            scrollLeft: pageLeft
        },800);

        //메뉴변경 - 함수호출
        menuChg(pageCount);
    });

});

function menuChg(o){
    $('.gnb li').eq(o).addClass('on').siblings().removeClass('on');
    $('.side-pager li').eq(o).addClass('on').siblings().removeClass('on');
};
>>>>>>> 4a438c39110fced56ec2692afc494846eea95e6f
