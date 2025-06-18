//index.js 

$(document).ready(function () {

    //슬라이드 이동함수 최초호출!
    //sideSlide();

    //오른쪽 이동버튼을 클릭했을 때 함수호출!
    //$('.next').click(sideSlide);
    /* $('.next').click(function () {
        sideSlide(1);
    }); */

    ////////// 전역변수 셋팅 ////////////////////////
    var moveBtn = 0; //0-클릭 전, 1-클릭 후
    var bseq; //블릿 순번을 담아줄 변수 
    /////////////////////////////////////////////////

    //자동실행 함수호출!
    autoCallSide()

    //이동 버튼을 클릭했을 때
    $('.abtn').on('click', function(){

        //클릭여부 확인
        if(moveBtn === 1) return false;
        moveBtn = 1;
        

        //클릭된 버튼의 이전/다음 구분
        //index(제한조건) : 제한조건 내의 요소 순번 리턴
        var idx = $(this).index('.abtn');
        console.log('클릭된 버튼의 index값: '+ idx);

        //인덱스 0 - 이전(왼쪽버튼), 인덱스 1 - 다음(오른쪽 버튼)
        //0 - false, 1 - true

        if(idx){
            //true, 인덱스 1 === 다음버튼 클릭
            sideSlide(1);
            
        }else{
            //false, 인덱스 0 === 이전버튼 클릭

            //왼쪽 버튼을 클릭해도 자동실행 호출 지우기!
            clearAutoSide();

            //1) 맨 뒤에 li를 맨 앞으로 이동(prepend), 동시에 left값은 -100% 변경
            //2) left값을 0으로 변경하여 애니메이션 이동

            $('#viewer').prepend($('#viewer li').last()).css({
                left: '-100%'
            }).animate({
                left: 0
            }, 1000, function(){
                moveBtn = 0; //클릭막기 해제
            });

            //페이저 변경
            //이전 슬라이드 이동 시 블릿 순번 - 항상 첫번째 li(인덱스0)가 보여짐!
            bseq = $('#viewer li').eq(0).attr('data-seq');
            $('#btnGroup li').eq(bseq).addClass('active').siblings().removeClass('active');

        }

    }); //click 이벤트



    /* ////////
    함수명 : sideSlide
    기능 : 슬라이드 이동 애니메이션
    ////////*/

    function sideSlide(c) {
        //매개변수 c - 호출구분자 (0-인터발 호출, 1-오른쪽 버튼호출)

        //만약 오른쪽 버튼을 눌러서 호출했을 때, 자동실행 지우기!
        if (c === 1) {
            //alert('오른쪽 버튼 클릭!');
            clearAutoSide();
        }

        $('#viewer').animate({
            left: '-100%'
        }, 1000, function () {
            //다음을 위한 준비!
            //1) 맨 앞의 요소를 맨 뒤로 이동 >> append(), appendTo()
            //2) 변경된 요소의 순서에 따라서 #viewer 위치값 변경
            $(this).append($('#viewer li').first()).css({
                left: 0
            });

            if (c === 1) moveBtn = 0;
        });

        //페이저(블릿) 변경
        //다음 슬라이드 이동 시 페이저 순번 - 항상 두 번째 li(인덱스1)의 내용이 보여짐!
        //bseq = $('#viewer li').first().next().attr('data-seq');
        bseq = $('#viewer li').eq(1).attr('data-seq');
        //console.log(bseq);

        $('#btnGroup li').eq(bseq).addClass('active').siblings().removeClass('active');

    }

    /* ////////
    함수명 : autoCallSide
    기능 : 슬라이드 자동실행 함수
    ////////*/
    var intcall; //인터벌을 담을 변수
    function autoCallSide() {
        intcall = setInterval(function () {
            sideSlide(0);
        }, 3000);
    }


    /* ////////
    함수명 : clearAutoSide
    기능 : 자동실행 함수 지우기
    ////////*/
    var tcall; //타임아웃용 변수
    function clearAutoSide(){
        //인터벌 지우기
        clearInterval(intcall);

        //타임아웃 지우기
        clearTimeout(tcall);

        //타임아웃 세팅 - 인터벌 재가동!
        tcall = setTimeout(function(){
            autoCallSide();
        }, 3000);
    }




    /*
    (1) setTimeout() : 단 한번! 일정한 시간 간격으로 함수를 호출하여 코드를 실행

    ///////////////// 기본형 //////////////////////

        var 참조변수 = setTimeout(function(){
            자바스크립트 실행코드;
        }, 시간간격(ms));

        var 참조변수 = setTimeout(실행코드(함수), 시간간격);

    ///////////////////////////////////////////////    


    (2) clearTimeout(참조변수) : setTimeout()을 제거하기 위해 사용!
    
    */




});