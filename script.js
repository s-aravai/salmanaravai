let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

let typewriterText = "I'm a Student at BVC";
let i = 0;
let speed = 100; 

function typeWriter() {
    if (i < typewriterText.length) {
        document.querySelector("#typewriter").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;



const readMoreBtn = document.querySelector('#read-more-btn');
const moreText = document.querySelector('#more-text');

readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        readMoreBtn.textContent = 'Read Less'; 
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More'; 
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            
            content.classList.toggle('show');

            
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});
