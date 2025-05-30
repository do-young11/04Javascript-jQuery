//1cutslide-2_250528.js
/* 
클릭대상 : #pager li
슬라이드가 이동하려면, 이동대상은 누구? #gallery
어떻게 이동할까요? 
- margin-left
- left

얼만큼 이동할까요?
1200px만큼 -> 슬라이드 하나의 너비만큼!
>> 슬라이드 하나의 너비를 구해보자! - width()

1200을 구해서 쓸 수 있는 방법은 없을까?

0번을 이동했을 때 : 1번 슬라이드, 0     -> 1200*0
1번을 이동했을 때 : 2번 슬라이드, -1200 -> 1200*1
2번을 이동했을 때 : 3번 슬라이드, -2400 -> 1200*2
3번을 이동했을 때 : 4번 슬라이드, -3600 -> 1200*3

>> 곱해지는 값을 내가 클릭하는 li의 인덱스 값으로 사용하자!
*/

$(function(){

    //슬라이드 하나의 너비 구하기
    var imgWidth = $('#gallery img').width(); //1200
    console.log('슬라이드 하나의 너비값: ' + imgWidth);

    $('#pager li').click(function(){

        var idx = $(this).index();
        console.log('클릭한 li의 인덱스값: ' + idx);

        // 이동거리를 px로 사용!
        /* $('#gallery').animate({
            marginLeft: -(imgWidth*idx)
        }, 1000); */

        // 이동거리를 %로 사용!
        $('#gallery').animate({
            //marginLeft: -(100*idx) + '%'
            left: -(100*idx) + '%'
        }, 800);

        // 페이저 변경!
        $(this).addClass('active').siblings().removeClass('active');

    });

});

