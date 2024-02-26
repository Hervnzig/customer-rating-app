document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const feedbackInput = document.querySelector(".input-section textarea");
  const submitBtn = document.getElementById("submit");
  const thankYouMessage = document.querySelector(".thank-you");
  let currentRating = 0; // Variable to hold current rating

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      currentRating = index + 1; // Update current rating
      updateRating(currentRating);
    });
  });

  function updateRating(rating) {
    stars.forEach((star, index) => {
      star.style.color = index < rating ? "#ffc107" : "grey";
    });
  }

  submitBtn.addEventListener("click", () => {
    const formData = new FormData();
    formData.append("entry.XXXXXXX", currentRating); // Replace XXXXXXX with your rating field ID
    formData.append("entry.YYYYYYY", feedbackInput.value); // Replace YYYYYYY with your feedback field ID

    fetch(
      "https://docs.google.com/forms/d/1WZ1MN7fiRVZqKdXnQb_TtjTLpd445Kit3z5vvRsibWk/edit#responses",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        thankYouMessage.style.display = "block";
        setTimeout(() => {
          thankYouMessage.style.display = "none";
        }, 3000); // Hide the thank you message after 3 seconds
        // Reset form
        feedbackInput.value = "";
        updateRating(0);
      })
      .catch((error) => console.error("Error:", error));
  });
});
