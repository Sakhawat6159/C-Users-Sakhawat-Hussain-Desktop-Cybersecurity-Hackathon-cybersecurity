// This file contains the JavaScript code for the Cybersecurity Hackathon project.
// It handles interactive elements of the webpage, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Join us in exploring the latest in cybersecurity!';
    document.body.appendChild(welcomeMessage);

    const button = document.createElement('button');
    button.textContent = 'Learn More';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Stay tuned for more information on cybersecurity topics and events!');
    });
});