// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Adjusts for sticky header height
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Validation and Redirection for Join Course
document.querySelector('.join-course-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const course = document.querySelector('select[name="course"]').value;

    if (name.trim() === '' || email.trim() === '' || course === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        window.location.href = 'join-success.html'; // Redirect to the success page
    }
});

// Dynamic Menu Highlighting Based on Scroll Position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 70) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Form Submission and Redirection for Join Course
document.querySelector('.join-course-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const course = document.querySelector('select[name="course"]').value;

    if (name.trim() === '' || email.trim() === '' || course === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        window.location.href = 'join-success.html'; // Redirect to the success page
    }
});
// Function to Toggle Menu on Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Adjusts for sticky header height
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Validation and Redirection for Join Course
document.querySelector('.join-course-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const course = document.querySelector('select[name="course"]').value;

    if (name.trim() === '' || email.trim() === '' || course === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        window.location.href = 'join-success.html'; // Redirect to the success page
    }
});
// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



