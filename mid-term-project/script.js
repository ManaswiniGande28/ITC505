// Define the story structure
const story = {
    start: {
        text: "You wake up in a dark forest. What do you do?",
        choices: ["Explore the forest", "Sit and wait for help"],
        consequence: ["explore", "wait"],
        image: "cave.jpg"
    }
};

// Set the initial stage
let currentStage = "start";

// Function to start the game
function startGame() {
    currentStage = "start";  // Set the initial stage to 'start'
    updatePage();
}

// Function to update the page with current story and choices
function updatePage() {
    const stage = story[currentStage];  // Get the current stage of the story
    
    // Update the story text
    document.getElementById("story").textContent = stage.text;

    // Display the image corresponding to the current stage
    document.getElementById("image").innerHTML = `<img src="${stage.image}" alt="Story Image">`;

    // Update the choices section
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ''; // Clear any previous choices

    // If there are choices, display them as buttons
    if (stage.choices.length > 0) {
        stage.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => {
                currentStage = stage.consequence[index];  // Set the next stage based on the player's choice
                updatePage();  // Update the page
            });
            choicesDiv.appendChild(button);
        });
    } else {
        // If no choices, end the game
        endGame();
    }
}

// Function to end the game
function endGame() {
    const stage = story[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("choices").innerHTML = ''; // Remove choices
    document.getElementById("image").innerHTML = `<img src="${stage.image}" alt="Final Image">`;
}

// Start the game when the page is loaded
startGame();
