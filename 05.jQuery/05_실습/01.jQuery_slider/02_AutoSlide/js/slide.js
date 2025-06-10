

$(function(){
    // $('.main').click(topmove);

    //setInterval(topmove,3000);

    //topmove2();

    setInterval(topmove2, 3000);
});


var page = 0;

function topmove (){
    page++;

    if (page===4){
        
        $('.wrap').css({
            marginTop: 0
        });
        page=1;
    }

    $('.wrap').animate({
        // marginTop: -400
        marginTop: -(400*page)
    },1000);
};

// 한번의 이동, 한번의 준비를 위한 함수를 만들어 보세요~

function topmove2 (){
    $('.wrap').animate({
        marginTop: -400
    }, 1000, function(){
        $('.wrap').append($('.wrap li').first());
        $('.wrap').css('margin-top',0);
    });
}