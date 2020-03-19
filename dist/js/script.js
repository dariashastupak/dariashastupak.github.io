$(document).ready(function(){
    $('.member__wrapper').slick({
        dots: true,
        arrows: false,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
              }
            },
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
              }
            }
            
          ]
    });

    $('.services__wrapper').slick({
      prevArrow:'<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
          breakpoint: 980,
           settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
      }
        ]
    });
    
   
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('tabs__caption-link_active').siblings().removeClass('tabs__caption-link_active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks ').fadeOut('slow');
    });

    $("a.gallery_img").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600, 
      'speedOut'		:	200, 
      'overlayShow'	:	false
    });

    $(".fancybox").fancybox({
      type: "image",
      onStart: function (el, index) {
          var thisElement = $(el[index]);
          $.extend(this, {
              href: thisElement.data("href")
          });
      }
  });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

});

$(".btn").on("click",function() {
    $(".input").toggleClass("inclicked");
    $(".btn").toggleClass("close");
});




