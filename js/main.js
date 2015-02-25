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
		scrollToElement('#work-container');
	})

	// $(document).on("click", "a.work", function(e){
 //  		 e.stopPropagation();
 //  		 e.preventDefault();

 //   $('html, body').animate({
 //      scrollTop: $(".work-container").offset().top
 //  		 }, 1000);
	// });

	// $(document).on("click", "a.work", function(){
	// 		scrollToElement("#work-container")
	// });

	$('.nav li a').on('click', function(){
        var goTo = $(this).attr('class');
        var href = window.location.href;
        
        var page;
        if (href.lastIndexOf(".html") == -1)
            page = "index";
        else
            page = href.substring(href.lastIndexOf('/') +1, href.lastIndexOf('.html') );

        if (goTo == "resume"){
            return;
        }
        if (goTo == "aboutme"){
            scrollToElement("#" + goTo + "-container");
            return;
        }
        if (page != 'index') {
            window.location = 'index.html#' + goTo + "-container";
        }
        else { scrollToElement("#" + goTo + "-container"); }
    })

});




