//flow

$(function(){

    setInterval(flow,20);//흘러가는 속도 조절
});
/* ///////////////////////////////////////////////////
함수명 : flow
기능 : 컨텐츠를 왼쪽으로 흐르게 하는 함수 
////////////////////////////////////////////////////////////*/

var moveNum = 0; //이동하는 left값을 담을 변수

function flow (){
    moveNum++; //left 이동값을 1씩 증가

    //다음을 위한 준비
    //li 1개의 너비보다 이동한 left 값이 커졌을 때
    var boxWidth = $('.flow li').first().outerWidth();
    console.log(boxWidth);

    if(moveNum>boxWidth){
        //이동한 픽셀수가 li 하나의 너비보다 커졌을 때 >>다음을 위한 준비
        //(왼쪽으로 흘러가서) 사라진 첫번째 li를 .flow의 맨 뒤로 이동 >> append
        //.flow의 li 순서가 변경되었으므로 left값 초기화
        //동시에 이동값(moveNum) 초기화
        $('.flow').append($('.flow li').first()).css('left',0);
        moveNum=0;
    }else{
        //moveNUm의 값을 left값으로 적용
        $('.flow').css({
            left : -moveNum
        });
    };
};
