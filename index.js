// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Find Talent button

document.getElementById("talentBtn").addEventListener("click", function () {
    alert("Welcome to SkillHub! Find the best freelancers here.");
});

// Find Work button

document.getElementById("workBtn").addEventListener("click", function () {
    alert("Welcome to SkillHub! Explore available freelance jobs.");
});

// Login button

document.querySelector(".login").addEventListener("click", function () {
    alert("Login page coming soon!");
});

// Sign Up button

document.querySelector(".signup").addEventListener("click", function () {
    alert("Create your SkillHub account!");
});

// Search functionality

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue !== "") {
            alert("Searching for: " + searchValue);
        } else {
            alert("Please enter a service to search.");
        }

    }

});