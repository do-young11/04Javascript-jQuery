//1cutslide-2


/* 
1. 보여지는 슬라이드 크기 (width) -> 이미지가 이동할 위치
2. 1번 클릭 -> 2번 이미지 왼쪽 이동 (marginLeft/left) -> #gallery가 #slider 크기 만큼 이동
3. 2번 클릭 -> 이전 1번 이미지 오른쪽 이동 / 다음 3번 이미지 왼쪽이동
 >> 왼쪽(-), 오른쪽(+)

*/

$(function(){ 
    /* var sliderW = $('#slider').width();
    console.log(sliderW); */

    /*
    $('#pager li').click(function(){
        $('#gallery').animate({
            marginLeft:-sliderW
        },800);
    }); 
    */

    ////////////////////////////////////////////////////

    //슬라이드 하나의 너비 구하기
    var imgWidth = $('#gallery img').width();
    console.log('슬라이드 하나의 너비값'+imgWidth);

    $('#pager li').click(function(){

        var idx = $(this).index();
        console.log('클릭한 인덱스 값'+idx); 
        //곱해지는 값을 클릭하는 li의 인덱스 값
        
        /* $('#gallery').animate({
            // marginLeft: '-='+imgWidth
            marginLeft: -(imgWidth*idx)
        },1000); */

        //이동거리 %로 사용
        $('#gallery').animate({
            // marginLeft: -(100*idx)+'%'

            //position 이용
            left: -(100*idx)+'%'
        },800);

        $(this).addClass('on').siblings().removeClass();
    });
});