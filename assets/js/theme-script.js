$(function () {
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
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
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 15,
			}
		}
	});
});