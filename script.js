document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-content');
    const delay = 3500; 
    const transitionDuration = 1000; 

    sliders.forEach(slider => {
        if (slider.children.length > 0) {
            const firstChild = slider.children[0];
            const clone = firstChild.cloneNode(true);
            slider.appendChild(clone);
        }
    });

    let currentIndex = 0;
    const totalSlides = sliders[0].children.length; 

    function nextSlide() {
        currentIndex++;

        sliders.forEach(slider => {
            const slideWidth = slider.parentElement.offsetWidth;
            
            slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        });

        if (currentIndex >= totalSlides - 1) {
            setTimeout(() => {
                sliders.forEach(slider => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                });
                currentIndex = 0;
            }, transitionDuration);
        }
    }

    setInterval(nextSlide, delay);
});
