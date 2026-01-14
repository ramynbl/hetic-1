document.addEventListener('DOMContentLoaded', function() {

    /* 1. ANIMATION TEXTE */
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


    /* 2. SLIDER */
    const skillsContainer = document.querySelector('.marquee-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        skillsContainer.style.display = 'flex';
        skillsContainer.style.flexDirection = 'column';
        skillsContainer.style.gap = '20px';
    
        const skillsRow1 = [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" }
        ];
    
        const skillsRow2 = [
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
            { name: "Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
            { name: "InDesign", icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" },
            { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
            { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
            { name: "Render", icon: "https://cdn.simpleicons.org/render" },
            { name: "Railway", icon: "https://cdn.simpleicons.org/railway" }
        ];
    
        function createMarqueeRow(skills, reverse = false) {
            const row = document.createElement('div');
            row.className = 'marquee-content';
            if (reverse) {
                row.style.animationDirection = 'reverse';
            }

            const content = skills.map(skill => `
                <div class="skill-item">
                    <img src="${skill.icon}" alt="${skill.name}">
                    ${skill.name}
                </div>
            `).join('');
            
            row.innerHTML = content + content + content + content;
            return row;
        }
    
        skillsContainer.appendChild(createMarqueeRow(skillsRow1));
        skillsContainer.appendChild(createMarqueeRow(skillsRow2, true));
    }
});
