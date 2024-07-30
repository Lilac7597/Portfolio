const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const text = ["<h1>Hello World</h1>", "console.log(\"Hello World\")", "cout<<\"Hello World\");"];
    const typingSpeed = 100; // Time in milliseconds between each character
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (textIndex < text.length) {
            if (charIndex < text[textIndex].length) {
                textElement.innerHTML += text[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                // Once the current text is fully typed, move to the next
                charIndex = 0;
                textIndex++;
                // Optionally add a delay before starting the next string
                setTimeout(type, typingSpeed * 20); // Adjust delay as needed
            }
        }
    }

    setTimeout(type, 2000);
});

