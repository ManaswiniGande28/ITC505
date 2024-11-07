// JavaScript templates for dynamic content
const homeContent = `
    <h2>Welcome to the Home Page</h2>
    <p>This is the initial content dynamically served by JavaScript.</p>
`;

const aboutContent = `
    <h2>About Us</h2>
    <p>This page gives an overview of our services and team.</p>
`;

const servicesContent = `
    <h2>Our Services</h2>
    <p>We offer a variety of web development services, including front-end and back-end development.</p>
`;

const contactContent = `
    <h2>Contact Us</h2>
    <p>You can contact us via email at support@example.com or call us at 123-456-7890.</p>
`;

// Get reference to the content area
const contentArea = document.getElementById('contentArea');

// Event listeners for navigation links to dynamically inject content
document.getElementById('homeLink').addEventListener('click', function() {
    contentArea.innerHTML = homeContent;
});

document.getElementById('aboutLink').addEventListener('click', function() {
    contentArea.innerHTML = aboutContent;
});

document.getElementById('servicesLink').addEventListener('click', function() {
    contentArea.innerHTML = servicesContent;
});

document.getElementById('contactLink').addEventListener('click', function() {
    contentArea.innerHTML = contactContent;
});
