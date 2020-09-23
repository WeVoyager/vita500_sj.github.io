$(function(){
    $('.vita-img').addClass('active');
    setTimeout(function(){
        $('.content div strong').addClass('active');
    },400)
    setTimeout(function(){
        $('.content div span').addClass('active');
    },800)
    setTimeout(function(){
        $('.content div a').addClass('active');
    },1400)

    $('.content div a').on('click',function(e){
        e.preventDefault();
        $('.popup').fadeIn();
    })

    $('.pop-close').on('click',function(){
        $('.popup').fadeOut();
    })

    $('.burger').on('click',function(){
        $(this).toggleClass('active');

        if($(this).attr('class').indexOf('active') != -1){
            $('.nav span').addClass('active')
        }else{
            $('.nav span').removeClass('active')
        }
    })
})