
    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', () => {
        alert('Signup Successfully!');
    });

    const signupButton = document.querySelector('.nav-links li:nth-child(3) a');
    const aboutButton = document.querySelector('.nav-links li:nth-child(2) a');
    const aboutSection = document.getElementById('about');
    const signupSection = document.getElementById('signup');

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(signupSection.offsetTop);
    });

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(aboutSection.offsetTop);
    });

    function scrollToSection(targetPosition) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;

        let startTime = null;
        function scrollToTarget(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const ease = Math.easeInOutQuad(progress, startPosition, distance, duration);
            window.scrollTo(0, ease);
            if (progress < duration) requestAnimationFrame(scrollToTarget);
        }

       
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(scrollToTarget);
    }

    const scrollButton = document.querySelector('.scroll-button');
    scrollButton.addEventListener('click', () => {
        scrollToSection(0); // Scroll to the top of the page
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('active');
            scrollButton.parentElement.classList.add('active');
        } else {
            navbar.classList.remove('active');
            scrollButton.parentElement.classList.remove('active');
        }
    });
    function animateText(text, container) {
        container.textContent = ''; // Clear existing content
        const letters = text.split('');

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animation = `fadeInUp 1s ease-in-out ${index * 0.1}s forwards`;
            container.appendChild(span);
        });
    }

    // Animate the "Welcome" text
    const welcomeTextContainer = document.getElementById('welcome-text');
    animateText('Welcome', welcomeTextContainer);

