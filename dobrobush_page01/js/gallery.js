$(document).ready(function(){
    $('.slider1').slick({
    	arrows:false,
    	dots:true,
    	adaptiveHeight:true,
    	slidesToShow:1,
    	slidesToScroll: 1,
    	speed: 500,
    	easing: 'ease',
    	infinite: false,
    	// initialSlide:0;
    	autoplay: false,
    	autoplaySpeed: 1000,
    	pauseOnFocus:true,
    	pauseOnHover: true,
		pauseOnDotsHover:true,
    	draggable: false,
    	swipe: true,
    	// touchTreshold: 10,
    	touchMove: true,
    	// waitForAnimate:false,
    	centerMode: false,
    	variableWidth: false,
    	// rows: 1,
    	// slidesPerRow: 1,
    	// vertical: false,
		// verticalSwiping: false,
		responsive: [
			{
			  	breakpoint: 440,
			  	settings: {
					dots:false
			  	}
			},
		]
    });
});