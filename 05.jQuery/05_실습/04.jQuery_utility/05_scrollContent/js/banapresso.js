//banapresso.js


$(function(){
    var box = $('.box:eq(0), .box:eq(1)');
    
    box.find('.img-box').animate({
        width: '50%'
    },800,function(){
        box.find('.txt-box').fadeIn(600);
    });
    
    // box.find('.txt-box').fadeIn(600);

});

$(window).scroll(function(){
    var scTop = Math.ceil($(this).scrollTop());
    console.log(scTop);

    var winheight = $(this).height();
    console.log('브라우저 화면의 높잇값'+winheight);

    var gap = Math.ceil(winheight * 0.9);
    console.log('gap: '+gap);
    /* 
    수학객체 메서드를 통해 정수 반환받기
    Math.ceil(값); : 소수점 첫째자리 무조건 올림
    Math.floor(값); : 첫째자리 무조건 내림
    Math.round(값); : 반올림
    */

    //3번 박스 등장
    var box3pos = $('.box').eq(2).offset().top - gap;
    console.log('.box3 스크롤 기준값: '+box3pos);

    if(scTop>box3pos){
        $('.box:eq(2)').find('.img-box').animate({
            width: '50%'
        },800,function(){
            $(this).next().fadeIn(600);
        });
    };

    //4번 박스 등장
    var box4pos = $('.box').eq(3).offset().top - gap;
    console.log('.box4 스크롤 기준값: '+box4pos);

    if(scTop>box4pos){
        $('.box:eq(3)').find('.img-box').animate({
            width: '50%'
        },800,function(){
            $(this).prev().fadeIn(600);
        });
    };
});