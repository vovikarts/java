// script.js

// Function to show an alert when "Learn More" button is clicked
function learnMore() {
    alert("Welcome to the Java Learning Hub! Start exploring tutorials, examples, and exercises now.");
}

// Example of adding dynamic content
document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById('intro');
    const message = document.createElement('p');
    message.textContent = "Keep practicing to become a Java expert!";
    message.style.color = "#555";
    introSection.appendChild(message);
});

// Functionality for interactive features can be expanded here
