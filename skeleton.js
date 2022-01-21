// ********** To take us to the index.html page (REDIRECTING) ***************
setTimeout(function(){
    window.location.href = 'homepage.html';
 }, 10000);
 // *************To slide the counter page up to bring the thanks page**********
function counter(){
    var count= setInterval(function(){
        var c=parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c == 100){
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }
    },60)
}
counter();