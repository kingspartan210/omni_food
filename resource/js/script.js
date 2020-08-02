$(document).ready(function(){
//    Sticky Navigation
    $('.js--section-feature').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'30%'
    })
    
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top},1000);
    })
    
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},1000);
    })
    
    $('.f-deliver').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},1000);
    })
    
    $('.h-work').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-step').offset().top},1000);
    })
    
    $('.o-cities').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-cities').offset().top},1000);
    })
    
    $('.s-up').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top},1000);
    })
    
//    Animation on Scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    
//    Mobile Navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    })
    
})