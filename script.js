// Updated mobile menu functionality
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300';
    div.innerHTML = `
        <div class="flex flex-col items-center py-4 space-y-4">
            <a href="#home" class="w-full text-center py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Home</a>
            <a href="#about" class="w-full text-center py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">About</a>
            <a href="#skills" class="w-full text-center py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Skills</a>
            <a href="#projects" class="w-full text-center py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Projects</a>
            <a href="#contact" class="w-full text-center py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Contact</a>
        </div>
    `;
    
    const existingMenu = nav.querySelector('.md\\:hidden');
    if (existingMenu) {
        existingMenu.remove();
    } else {
        nav.appendChild(div);
    }
});

// Add touch event handling for mobile
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    // Close mobile menu on swipe
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        const existingMenu = nav.querySelector('.md\\:hidden');
        if (existingMenu && xDiff > 0) {
            existingMenu.remove();
        }
    }

    xDown = null;
    yDown = null;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Clear form
    contactForm.reset();
    alert('Thank you for your message!');
});
