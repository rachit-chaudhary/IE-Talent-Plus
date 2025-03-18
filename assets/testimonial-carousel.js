if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    const carousel = document.querySelector('.carousel-native');
    const testimonials = document.querySelectorAll('.testimonial');
    // const prevBtn = document.querySelector('.prev');
    // const nextBtn = document.querySelector('.next');
    let index = 0;
    let interval;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % testimonials.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    // nextBtn.addEventListener('click', () => {
    //     stopAutoSlide();
    //     nextSlide();
    //     startAutoSlide();
    // });

    // prevBtn.addEventListener('click', () => {
    //     stopAutoSlide();
    //     prevSlide();
    //     startAutoSlide();
    // });

    startAutoSlide();
}