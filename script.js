document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingOutput = document.querySelector(".feedback-section p");
  const submitBtn = document.getElementById("submit");
  const thankYouMessage = document.querySelector(".thank-you");
  const startFeedbackBtn = document.getElementById("start-feedback");
  const feedbackContainer = document.querySelector(".feedback-container");
  const welcomeSection = document.querySelector(".welcome-section");

  // Event listener for the 'Start Feedback' button
  startFeedbackBtn.addEventListener("click", () => {
    welcomeSection.style.display = "none"; // Hide welcome section
    feedbackContainer.style.display = "block"; // Show feedback form
  });

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      updateRating(index + 1);
    });
  });

  function updateRating(rating) {
    stars.forEach((star, index) => {
      star.style.color = index < rating ? "#ffc107" : "grey";
    });
    ratingOutput.textContent = `Rate your experience with our product... ${rating} Stars`;
  }

  // submitBtn.addEventListener("click", () => {
  //   thankYouMessage.style.display = "block";
  //   setTimeout(() => {
  //     thankYouMessage.style.display = "none";
  //   }, 3000); // Hide the thank you message after 3 seconds
  // });

  submitBtn.addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value;
    // Collect other values similarly if needed

    // Show the thank you message with the user's first name
    thankYouMessage.innerHTML = `<p>Thanks for the feedback, ${firstName}!</p>`;
    thankYouMessage.style.display = "block";
    setTimeout(() => {
      thankYouMessage.style.display = "none";
    }, 3000); // Hide the thank you message after 3 seconds

    // Optionally, here you could also clear the input fields
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const startFeedbackBtn = document.getElementById("start-feedback");
  const backButton = document.getElementById("back-button");
  const feedbackContainer = document.querySelector(".feedback-container");
  const welcomeSection = document.querySelector(".welcome-section");
  const siteHeader = document.querySelector(".site-header");

  startFeedbackBtn.addEventListener("click", () => {
    welcomeSection.style.display = "none"; // Hide welcome section
    feedbackContainer.style.display = "block"; // Show feedback form
    siteHeader.style.display = "flex"; // Show the header
  });

  backButton.addEventListener("click", () => {
    feedbackContainer.style.display = "none"; // Hide feedback form
    welcomeSection.style.display = "block"; // Show welcome section
    siteHeader.style.display = "none"; // Hide the header again
  });
});

function changeScreen(oldScreen, newScreen) {
  // Hide the old screen
  oldScreen.classList.add("fade-enter");

  // After a slight delay, remove the old screen and show the new one
  setTimeout(() => {
    oldScreen.style.display = "none";
    newScreen.style.display = "block";
    newScreen.classList.add("fade-enter");

    // Start the transition to fade in the new screen
    setTimeout(() => {
      newScreen.classList.add("fade-enter-active");
    }, 10); // Execute after the next frame
  }, 500); // This should match the transition duration
}

document.addEventListener("DOMContentLoaded", () => {
  const startFeedbackBtn = document.getElementById("start-feedback");
  const backButton = document.getElementById("back-button");
  const feedbackContainer = document.querySelector(".feedback-container");
  const welcomeSection = document.querySelector(".welcome-section");
  const siteHeader = document.querySelector(".site-header");

  // Event listener for the 'Start Feedback' button
  startFeedbackBtn.addEventListener("click", () => {
    welcomeSection.style.display = "none"; // Hide welcome section
    feedbackContainer.style.display = "block"; // Show feedback form
    siteHeader.style.display = "flex"; // Show the header
  });

  // Event listener for the 'Back' button
  backButton.addEventListener("click", () => {
    feedbackContainer.style.display = "none"; // Hide feedback form
    welcomeSection.style.display = "block"; // Show welcome section
    siteHeader.style.display = "none"; // Optionally hide the header again
  });
});

// Example usage:
// Assuming you have two divs with the IDs 'welcomeScreen' and 'feedbackFormScreen'
const welcomeScreen = document.getElementById("welcomeScreen");
const feedbackFormScreen = document.getElementById("feedbackFormScreen");

// Call this function when you want to go from the welcome screen to the feedback form
changeScreen(welcomeScreen, feedbackFormScreen);
