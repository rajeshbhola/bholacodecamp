// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
};

window.addEventListener("load", function () {
  // Add a delay of 3 seconds before hiding the loading spinner
  setTimeout(function () {
    document.getElementById("loading-spinner").style.display = "none";
  }, 300); // 3000 milliseconds = 3 seconds
});



