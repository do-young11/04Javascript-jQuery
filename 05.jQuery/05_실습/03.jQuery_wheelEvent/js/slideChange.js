//slideChange

// alert('연결');

/* 
마우스 휠 이벤트
- 마우스 휠을 움직일 때 발생하는 이벤트
- 기본 이벤트 = 스크롤 이벤트
- 마우스 휠은 스크롤을 하기 위한 도구(하드웨어)

*마우스 휠 이벤트명
1) mousewheel : Chrome, IE/Edge, 사파리, 오페라 브라우저 지원 가능
2) Wheel : 표준 코딩에서 사용하는 이벤트명(ie, 사파리 지원안함) 
3) DOMMouseScroll : 파이어폭스 전용 이벤트명

*/

/// 전역변수 설정

var pageCount = 0; //현재 페이지 번호 (첫 페이지 0 = 초깃값)
// var total; //총 페이지 갯수

//총 페이지 수가 고정된 값이라면 상수 선언 가능 상수는 값의 재할당(변경) 불가
const total = 6;

var stat = 0; // 스크롤 상태변경(0-실행전/허용, 1-실행중/잠금)


$(document).ready(function(){
    $(document).on('mousewheel DOMMouseScroll', function(){
        // console.log('휠 움직이는 중');

        // 1.휠 이벤트 핸들러 제어하기
        //이벤트 핸들러가 실행되는 동안 스크롤 잠금 (다른 이벤트 핸들러가 실행되지 못하게 함)

        //입장확인
        if(stat ===1)return false;
        stat = 1; //표를 사용

        // 2.브라우저 구분하기 - 발생한 이벤트(객체) 정보 확인하기
        var evt = window.event;
        console.log(evt);

        // 3.wheelDelta값 구하기 - 브라우저별로 구분해서 값 반환받기
        /* 
        wheelDelta속성
        - Chrom. ie/Eade에서 사용
        - 오페라, 파이어폭스 브라우저는 detail 사용
        - 마우스휠 이벤트 발생시, 스크롤 이동방향, 이동거리를 리턴해주는 속성
        - 양수(+)는 윗 방향, 음수(-)는 아랫방향을 휠 이동
        - click이벤트에서 wheelDelta를 적용하면 클릭된 횟수 리턴
        */
        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        console.log('마우스휠 델타값: '+delta);

        // 4.파이어폭스 브라우저를 위한 처리
        // 파이어폭스는 델타값이 반대로 반환(스크롤 처리방향이 반대)
        // 마우스 휠이 아래로 이동하면 양수(+), 마우스 휠이 위로 이동하면 음수(-)
        if(/Firefox/i.test(navigator.userAgent)){
            delta = -evt.detail;
            console.log('파이어폭스 detail: '+delta);
        };

        /* 
        브라우저 구분을 위한 if문 조건식 풀이
        1) 자바스크립트의 정규표현식
        /찾고자 하는 문자 똔느 문자패턴 /플래그

        *플래그에 사용할 수 있는 값
        i (ignore case) : 대소문자를 구별하지 않고 검색
        g (global) : 문자열 내의 모든 패턴 검색
        m (multi line) : 문자열의 행이 바뀌더라도 검색

        2) test(문자열)
        - 문자열과 정규표현식이 일치하는 문자가 있으면 true, 없으면 false 반환

        3) navigator.userAgent : 현재 브라우저 객체를 리턴
        */

        // 5.마우스휠 이벤트로 페이지 이동하기
        // 마우스 휠 이동방향 -> 아래, 다음 페이지 / 음수
        // 마우스 휠 이동방향 -> 위, 이전 페이지 / 양수
        if(delta<0){
            //음수, 아랫방향, 다음 페이지
            pageCount++;
            if(pageCount===total)pageCount=total-1;
            
        }else{
            //양수, 윗방향, 이전 페이지
            pageCount--;
            if(pageCount=== -1)pageCount=0;
        };
        // if else문을 통해 이동할 페이지 순번 반환
        // 이동할 페이지 위치 확인 -> 스크롤의 위치값으로 사용
        var pageTop = $('.page').eq(pageCount).offset().top;
        console.log('페이지 offset: '+pageTop);

        //페이지 이동
        

    });
});