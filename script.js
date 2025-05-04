// script.js

// Theme switcher functionality
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for reaching out!";
        formMessage.style.color = "green";
        // Optionally, clear the form after submission
        document.getElementById("contact-form").reset();
    }
});

// Animations on Scroll for project images
window.addEventListener("scroll", function() {
    let projects = document.querySelectorAll(".project-card");
    projects.forEach(function(project) {
        if (project.getBoundingClientRect().top < window.innerHeight) {
            project.classList.add("visible");
        }
    });
});

// Mobile menu toggle
document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".nav").classList.toggle("active");
});

// Smooth scroll for navigation links
document.querySelectorAll(".menu-item a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,  // Adjust for header height
            behavior: "smooth"
        });
    });
});

// Header shrink on scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});