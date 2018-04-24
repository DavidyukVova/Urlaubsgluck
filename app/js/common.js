$(function () {
    $('.burger_trigger, .mobile_menu').click(function () {
        $('.mobile_menu').toggleClass('mobile_menu_opened');
    })
    $(document).click(function (event) {
        if ($(event.target).closest(".burger_trigger").
            length ) return;
        $('.mobile_menu').removeClass('mobile_menu_opened');
        event.stopPropagation();
    })
});

$(function () {
    $(".shadow1").mouseenter(function(){
        $('.more1').addClass('more_opened1')
    }).mouseleave(function(){
        $('.more1').removeClass('more_opened1')
    });
});

$(function () {
    $(".shadow2").mouseenter(function(){
        $('.more2').addClass('more_opened2')
    }).mouseleave(function(){
        $('.more2').removeClass('more_opened2')
    });
});

$(function () {
    $(".shadow3").mouseenter(function(){
        $('.more3').addClass('more_opened3')
    }).mouseleave(function(){
        $('.more3').removeClass('more_opened3')
    });
});

$(function () {
    $(".shadow-photo1").mouseenter(function(){
        $('.add1-btn').addClass('add1-btn_opened')
    }).mouseleave(function(){
        $('.add1-btn').removeClass('add1-btn_opened')
    });
});

$(function () {
    $(".shadow-photo2").mouseenter(function(){
        $('.add2-btn').addClass('add2-btn_opened')
    }).mouseleave(function(){
        $('.add2-btn').removeClass('add2-btn_opened')
    });
});

$(function () {
    $(".shadow-photo3").mouseenter(function(){
        $('.add3-btn').addClass('add3-btn_opened')
    }).mouseleave(function(){
        $('.add3-btn').removeClass('add3-btn_opened')
    });
});

$(function () {
    $(".shadow-photo4").mouseenter(function(){
        $('.add4-btn').addClass('add4-btn_opened')
    }).mouseleave(function(){
        $('.add4-btn').removeClass('add4-btn_opened')
    });
});
