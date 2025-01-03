// tutorials.js

// Display a welcome message for users visiting the Tutorials page
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the Tutorials page of the Java Learning Hub!");
});

// Dynamic loading of tutorial content
function loadTutorialContent() {
    const tutorials = [
        { level: "Beginner", title: "Introduction to Java", link: "#" },
        { level: "Beginner", title: "Setting Up Your Environment", link: "#" },
        { level: "Intermediate", title: "Object-Oriented Programming Basics", link: "#" },
        { level: "Advanced", title: "Java Streams and Lambdas", link: "#" },
    ];

    const mainContent = document.querySelector('main');
    const dynamicSection = document.createElement('section');
    dynamicSection.innerHTML = `<h2>More Tutorials</h2><ul></ul>`;

    tutorials.forEach(tutorial => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${tutorial.link}">${tutorial.level} - ${tutorial.title}</a>`;
        dynamicSection.querySelector('ul').appendChild(listItem);
    });

    mainContent.appendChild(dynamicSection);
}

// Trigger dynamic content loading on button click (if added later)
document.addEventListener("DOMContentLoaded", loadTutorialContent);
