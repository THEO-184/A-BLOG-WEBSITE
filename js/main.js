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

// SLIDE IN ANIMATION

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
	sliderImages.forEach((sliderImage) => {
		// half way through the image
		const slideInAt =
			window.pageYOffset + window.innerHeight - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;

		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.pageYOffset < imageBottom;

		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add("active");
		} else {
			sliderImage.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", checkSlide);
