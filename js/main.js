function scrollToElement(elementID){
	var top = $(elementID).position().top - $('.nav').height();
	// $(window).scrollTop( top );

	$('html, body').animate({
        scrollTop: top + 'px'
    }, 'fast');
}

$(document).ready(function () {

	$('.grid-element').hover(function (){
		$(this).fadeTo("slow", 0.5);
	}, function(){
		$(this).fadeTo("fast", 1);
	});

	// var width = $(window).width() - 25; 
	// $(".header-img").width(width);

	$('.chevron-wrapper').on('click', function(){
		scrollToElement('.work-container');
	})

	$('.nav li a').on('click', function(){
		goTo = $(this).attr('class');
		href = window.location.href;
		page = href.substring(href.lastIndexOf('/') +1, href.lastIndexOf('.html') );
		if (goTo == "resume"){
			return;
		}
		if (page != 'index')
		{
			window.location = 'index.html#' + goTo + "-container";
		}
		scrollToElement("#" + goTo + "-container");
	})

});



