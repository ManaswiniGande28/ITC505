document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const form = document.getElementById('madLibForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        // Get form values
        const adjective = document.getElementById('adjective').value;
        const pluralNoun = document.getElementById('pluralNoun').value;
        const verb = document.getElementById('verb').value;
        const place = document.getElementById('place').value;
        const noun = document.getElementById('noun').value;

        // Validate form data (ensure all fields are filled out)
        if (!adjective || !pluralNoun || !verb || !place || !noun) {
            alert("Please fill out all fields!");
            return;
        }

        // Construct the mad lib text
        const madLib = `
            Once upon a time, a ${adjective} ${pluralNoun} decided to ${verb} in the ${place}. 
            It was a ${adjective} day, and they found a ${noun} along the way.
        `;

        // Display the mad lib result
        const madLibResult = document.getElementById('madLibResult');
        madLibResult.innerHTML = `<h2>Your Mad Lib:</h2><p>${madLib}</p>`;

        // Update last modified date
        const lastModified = document.lastModified;
        document.getElementById('lastModified').textContent = lastModified;
    });
});
