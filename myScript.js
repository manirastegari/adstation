// profile dropdown with click on it appears and disappears


// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdown-content");
//     dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
//   }
  
//-------- profile drop down disappears with click on screen

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
  var dropdownContent = document.getElementById("dropdown-content");
  var profileButton = document.querySelector(".profile-button");
  
  // Check if the clicked element is outside the dropdown menu and the profile button
  if (!dropdownContent.contains(event.target) && !profileButton.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});