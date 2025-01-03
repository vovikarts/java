// examples.js

// Log a welcome message when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Explore Java code examples and enhance your skills!");
});

// Add dynamic interaction
function addExampleLink(sectionId, exampleTitle, link) {
    const section = document.querySelector(`#${sectionId} ul`);
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${link}">${exampleTitle}</a>`;
    section.appendChild(listItem);
}

// Add a sample example dynamically
document.addEventListener("DOMContentLoaded", () => {
    addExampleLink('advanced-section', 'Dynamic Code Loading Example', '#');
});
