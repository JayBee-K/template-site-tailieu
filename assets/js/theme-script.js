let windowWidth = $(window).width();
const initMenuMobile = function () {
	$('.doc-header_bottom').addClass('collapse').attr('id', 'menu-mobile');
	$(".doc-header_bottom ul > li > ul").each(function (index) {
		$(this).prev().attr({
			"href": "#subMenu" + index,
			"data-toggle": "collapse"
		});
		$(this).attr({
			"id": "subMenu" + index,
			"class": "collapse " + $(this).attr('class'),
			"data-bs-parent": "#menu-mobile"
		});
	})
}

$(function () {
	if (windowWidth < 991) {
		initMenuMobile();
	}
	
	const banner = new Swiper('#banner-slide .swiper-container', {
		loop: true,
		spaceBetween: 50,
		speed: 1000,
		effect: 'fade',
		navigation: {
			nextEl: '#banner-slide .swiper-button-next',
			prevEl: '#banner-slide .swiper-button-prev',
		},
		pagination: {
			el: "#banner-slide .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 100000,
			disableOnInteraction: false,
		}
	})
	
	const products = new Swiper('#products-slide .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#products-slide .swiper-button-next",
			prevEl: "#products-slide .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_1 = new Swiper('.swiper-product_1 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_1 .swiper-button-next",
			prevEl: ".swiper-product_1 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_2 = new Swiper('.swiper-product_2 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_2 .swiper-button-next",
			prevEl: ".swiper-product_2 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_3 = new Swiper('.swiper-product_3 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_3 .swiper-button-next",
			prevEl: ".swiper-product_3 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_4 = new Swiper('.swiper-product_4 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_4 .swiper-button-next",
			prevEl: ".swiper-product_4 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_5 = new Swiper('.swiper-product_5 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_5 .swiper-button-next",
			prevEl: ".swiper-product_5 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_6 = new Swiper('.swiper-product_6 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_6 .swiper-button-next",
			prevEl: ".swiper-product_6 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const product_7 = new Swiper('.swiper-product_7 .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-product_7 .swiper-button-next",
			prevEl: ".swiper-product_7 .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			991: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	
	const partners = new Swiper('#partners-slide .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: "#partners-slide .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2.6,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 4.6,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 6.6,
				spaceBetween: 15,
			}
		}
	});
	
	const logo = new Swiper('#logo-slide .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: "#logo-slide .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2.6,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 4.6,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 6.6,
				spaceBetween: 15,
			}
		}
	});
	
	const preview = new Swiper('#preview-slide .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#preview-slide .swiper-button-next",
			prevEl: "#preview-slide .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 15,
			}
		}
	});
	
	const testimonial = new Swiper('#testimonial-slide .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: "#testimonial-slide .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.3,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 15,
			}
		}
	});
	
	$(document).on("click", ".showDesc", function () {
		if ($(this).prev('.desc-content').hasClass('content-full')) {
			$(this).prev('.desc-content').removeClass('content-full');
		} else {
			$(this).prev('.desc-content').addClass('content-full');
		}
	});
});