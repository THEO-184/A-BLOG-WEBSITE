const responsive = {
	0: {
		items: 1,
	},

	470: {
		items: 1,
	},

	650: {
		items: 2,
	},

	960: {
		items: 3,
	},
};

window.addEventListener("load", () => {
	AOS.init();
});

$(document).ready(function () {
	$nav = $(".nav");
	$toglleCollapse = $(".toggle-collapse");

	$toglleCollapse.click(function () {
		$nav.toggleClass("collapse");
	});

	// Owl-carousel for Blog
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		navText: [$(".owl-navigation .owl-nav-prev")],
		responsive: responsive,
	});

	// click to scroll
	$(".move-up span").click(function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},
			1000
		);
	});
});


