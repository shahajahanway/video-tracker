const video = document.getElementById("myVideo");
const statusMessage = document.getElementById("statusMessage");
const checkMark = document.getElementById("checkMark");

// Variable to track if the user has skipped the video
let skipped = false;

// Listen for when the user seeks in the video
video.addEventListener("seeking", () => {
    skipped = true;
});

// Detect when the video ends
video.addEventListener("ended", () => {
    if (!skipped) {
        statusMessage.textContent = "You have completed the video without skipping!";
        checkMark.classList.remove("hidden"); // Show the green check mark
    } else {
        statusMessage.textContent = "You skipped the video. Try watching it fully!";
        checkMark.classList.add("hidden"); // Hide the green check mark
    }
});

// Reset the status when the user restarts the video
video.addEventListener("play", () => {
    if (video.currentTime === 0) {
        skipped = false;
        statusMessage.textContent = "Watch the video to see the completion status.";
        checkMark.classList.add("hidden");
    }
});
