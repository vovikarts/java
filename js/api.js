// api.js

// Log a message when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Discover free APIs to use in your Java projects!");
});

// Fetch and display APIs dynamically
function loadAPIs() {
    const apis = [
        { name: "OpenWeatherMap API", link: "https://openweathermap.org/api", description: "Get weather data for any location." },
        { name: "REST Countries API", link: "https://restcountries.com/", description: "Retrieve information about countries." },
        { name: "JSONPlaceholder", link: "https://jsonplaceholder.typicode.com/", description: "Fake online REST API for testing." },
        { name: "The Cat API", link: "https://thecatapi.com/", description: "Access random cat images and data." },
    ];

    const mainContent = document.querySelector('main section ul');

    apis.forEach(api => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${api.link}" target="_blank">${api.name}</a>
            <p>${api.description}</p>
        `;
        mainContent.appendChild(listItem);
    });
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", loadAPIs);
