$(document).ready(function(){
	$('.slider').slick({
		
	});

	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
