// exercises.js

// Log a message on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ready to practice Java exercises!");
});

// Highlight the section being viewed
function highlightSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = section.id === sectionId ? "#eef" : "#fff";
    });
}

// Example function to dynamically add an exercise
function addExercise(level, title, link) {
    const section = document.querySelector(`#${level}-exercises ul`);
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${link}">${title}</a>`;
    section.appendChild(listItem);
}

// Load dynamic content
document.addEventListener("DOMContentLoaded", () => {
    addExercise("beginner", "Loops Practice", "#");
});
