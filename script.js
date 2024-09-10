document.querySelectorAll('.carousel').forEach(carousel => {
    let touchstartX = 0;
    let touchendX = 0;

    carousel.addEventListener('touchstart', event => {
        touchstartX = event.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', event => {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchendX < touchstartX) {
            carousel.querySelector('.carousel-control-next').click();
        }
        if (touchendX > touchstartX) {
            carousel.querySelector('.carousel-control-prev').click();
        }
    }
});
