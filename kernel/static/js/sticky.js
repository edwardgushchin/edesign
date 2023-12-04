if ($(this).scrollTop() > 1){
    $('.navbar').addClass("sticky");
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.navbar').addClass("sticky");
    }
    else if ($(".navbar-toggler").attr("aria-expanded") == "false" || $(".navbar-toggler").attr("aria-expanded") == undefined){
        $('.navbar').removeClass("sticky");
    }
});

function sticky_click() {
   if($(".navbar-toggler").attr("aria-expanded") == "false" || $(".navbar-toggler").attr("aria-expanded") == undefined){
       $('.navbar').addClass("sticky");
   }
   else{
       if($(this).scrollTop() == 0)
        $('.navbar').removeClass("sticky");
   }
}

 
$(document).ready(function(){
	$("#exCollapsingNavbar").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});