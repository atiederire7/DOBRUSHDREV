$(document).ready(function(){
    $('.slider').slick({
    	arrows:true,
    	// dots:true,
    	adaptiveHeight:true,
    	slidesToShow:3,
    	slidesToScroll: 1,
    	speed: 400,
    	easing: 'ease',
    	infinite: true,
    	// initialSlide:0;
    	autoplay: false,
    	autoplaySpeed: 700,
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
    });
});