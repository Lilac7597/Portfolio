const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const wave = document.querySelector('.menu__wave');
const navbar = document.querySelector('.navbar');
const menuCont = document.querySelector('.menu__container');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    wave.classList.toggle('active');
    navbar.classList.toggle('active');
    menuCont.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const text = ["<h1>Hello World</h1>", "console.log( \"Hello World\" );", "cout << \"Hello World\" << endl;"];
    const typingSpeed = 100; // Time in milliseconds between each character
    const deletingSpeed = 50; // Time in milliseconds between each character deletion
    const pauseBetweenTexts = 2000; // Pause before typing starts and after deleting ends
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = text[textIndex];
        textElement.textContent = currentText.slice(0, charIndex);

        if (!isDeleting && charIndex < currentText.length) {
            // Typing phase
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting phase
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            // Start deleting after typing the full text
            isDeleting = true;
            setTimeout(type, pauseBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next text after deleting
            isDeleting = false;
            textIndex = (textIndex + 1) % text.length; // Loop back to start if at the end
            setTimeout(type, pauseBetweenTexts);
        }
    }

    setTimeout(type, 2000); // Initial delay before starting typing
});


