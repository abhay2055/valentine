// script.js

var yesClickCount = 0;
var angryEmojis = ["😟", "☹️", "🥹", "👿", "😠"];

function showValentine() {
    var heart = document.getElementById("heart");
    var message = document.getElementById("message");
    var options = document.getElementById("options");
    var button = document.getElementById("valentineButton"); // get the button element

    // Display the heart, message, and options
    heart.style.display = "inline";
    message.style.display = "block";
    options.style.display = "block";

    // Hide the button
    button.style.display = "none";

    // Change background color to light pink
    document.body.style.backgroundColor = "#ffd4d4";
}

function sayYes() {
    var heart = document.getElementById("heart");
    heart.textContent = "❤️"; // Change back to heart emoji

    var message = document.getElementById("message");
    if (yesClickCount === 0) {
        message.textContent = "Will you be my Wi-Fi, in a world full of offline?";
    } else if (yesClickCount === 1) {
        message.textContent = "Will you be my byte, in a digital love confined?";
    } else if (yesClickCount === 2) {
        message.textContent = "Will you be my algorithm, in a problem undefined?";
    } else if (yesClickCount === 3) {
        message.textContent = "Will you be my compiler, in code that's so refined?";
    } else if (yesClickCount === 4) {
        message.textContent = "Will you be my byte, in a digital love confined?";
    } else if (yesClickCount === 5) {
        // Show thank you message and hide other elements
        var thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.style.display = "block";
        thankYouMessage.classList.add("bold");
        document.getElementById("heart").style.display = "none";
        document.getElementById("message").style.display = "none";
        document.getElementById("options").style.display = "none";
        return; // Exit function as further processing is not required
    }

    // Increment click count
    yesClickCount++;

    // Change the options buttons
    var options = document.getElementById("options");
    options.innerHTML = '<button onclick="sayYes()">Yes</button><button onclick="sayNo()">No</button>';
}

function sayNo() {
    var heart = document.getElementById("heart");
    var options = document.getElementById("options");

    // Display random angry emoji
    var randomIndex = Math.floor(Math.random() * angryEmojis.length);
    heart.textContent = angryEmojis[randomIndex];

    // Show options buttons
    options.style.display = "block";
}
