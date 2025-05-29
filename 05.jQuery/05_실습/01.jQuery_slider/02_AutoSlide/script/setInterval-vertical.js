//setInterval-vartical

$(function(){

    /* $('.main').click(topmove); */
    var auto = setInterval(topmove,2000);
    $('.main').mouseenter(function(){
        clearInterval(auto);
    }).mouseleave(function(){
        auto = setInterval(topmove,2000)
    });

    
});
var page = 0;

function topmove(){
    page++;

    if(page===4){
        page=1;

        $('.slide').css({
            marginTop:0
        })
    }
    $('.slide').animate({
        marginTop: -(600*page)
    },800);
    
    //페이저

};

