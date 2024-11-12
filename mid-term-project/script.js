// Define the story structure
const story = {
    start: {
        text: "You wake up in a dark forest. What do you do?",
        choices: ["Explore the forest", "Sit and wait for help"],
        consequence: ["explore", "wait"],
        image: "forest.JPG" 

    },
    explore: {
        text: "You find a mysterious cave. Do you enter?",
        choices: ["Enter the cave", "Leave the cave"],
        consequence: ["enter", "leave"],
        image: "file:///C:/Users/mg3747/Downloads/cave.jpg"
    },
    wait: {
        text: "You sit down and wait. A mysterious figure approaches. Do you talk to them?",
        choices: ["Talk to the figure", "Run away"],
        consequence: ["talk", "run"],
        image:"file:///C:/Users/mg3747/Downloads/figure.jpg"
    },
    enter: {
        text: "You enter the cave and find treasure! You have won the game.",
        choices: [],
        consequence: [],
        image: "file:///C:/Users/mg3747/Downloads/treasure.jpg"
    },
    leave: {
        text: "You leave the cave and wander aimlessly, eventually finding your way out. The game ends.",
        choices: [],
        consequence: [],
        image: "file:///C:/Users/mg3747/Downloads/exit.jpg"
    },
    talk: {
        text: "The figure introduces themselves as a guide. They lead you to safety. You have won!",
        choices: [],
        consequence: [],
        image: "file:///C:/Users/mg3747/Downloads/safety.jpg"
    },
    run: {
        text: "You run away, but the figure catches up to you. Unfortunately, the game ends.",
        choices: [],
        consequence: [],
        image: "file:///C:/Users/mg3747/Downloads/caught.jpg"
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
