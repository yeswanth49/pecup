// Countdown Script

function updateCountdowns() {
    const deadlines = {
        "countdown1": new Date("2024-11-20"), // deadline 1
        "countdown2": new Date("2024-11-29"), // deadline 2
        "countdown3": new Date("2024-11-29"),
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day

    for (const [id, deadlineDate] of Object.entries(deadlines)) {
        const timeDiff = deadlineDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) - 1; // Subtract 1 to exclude today

        // Update the HTML with the countdown
        const countdownElement = document.getElementById(id);
        if (daysLeft > 1) {
            countdownElement.textContent = ` [${daysLeft} days left]`;
        } else if (daysLeft === 1) {
            countdownElement.textContent = ` [1 day left]`;
        } else {
            countdownElement.textContent = ' [Deadline passed]';
        }
    }
}

// Run the function when the page loads
window.onload = updateCountdowns;

// Menu Button Script

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        // For debugging purposes, log the button click
        console.log('Menu button clicked');
    });
});


// Hero Line Script

const texts = [ "Its Time for PEC.UP's Feedback..", "Made for students, by students!"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-heading').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before typing the next word
    } else {
        setTimeout(type, 150);
    }
})();