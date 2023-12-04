if(window.screen.width > 980) {
  $(function() {
    $('.parallax').each(function(){
      var $bgobj = $(this); // создаем объект
      $(window).scroll(function() {
        var coords = '0% '+ ($(window).scrollTop()  / $bgobj.data('speed')) + 'px';
        $bgobj.css({ backgroundPosition: coords });
      });
    });
  });
}