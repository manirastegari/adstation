


// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push, set } from "firebase/database";

// // import { getAnalytics } from "firebase/analytics";


// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCDblnBm5avSCUr2ZuQkW2GVH_ko2rpvYw",
//   authDomain: "adstation2-5d91a.firebaseapp.com",
//   projectId: "adstation2-5d91a",
//   storageBucket: "adstation2-5d91a.appspot.com",
//   messagingSenderId: "290914179590",
//   appId: "1:290914179590:web:9f007271c1ad9ab8da0187",
//   measurementId: "G-RD12HFYCSD"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const usersRef = ref(database, "users");

// function submitForm(event) {
//   event.preventDefault(); // Prevent form submission and page reload

//   // Get form values
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;
//   var password = document.getElementById("password").value;

//   // Store the data in Firebase Realtime Database
//   const newUserRef = push(usersRef); // Create a new child node for the user
//   set(newUserRef, {
//     username: username,
//     email: email,
//     phone: phone,
//     password: password
//   })
//   .then(() => {
//     // Data successfully saved
//     console.log("Data saved successfully!");
//     // Optionally, you can display a success message to the user or redirect them to a different page
//   })
//   .catch((error) => {
//     // An error occurred while saving the data
//     console.error("Error saving data:", error);
//     // Optionally, you can display an error message to the user or handle the error in a different way
//   });
// }
















function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
  var dropdownContent = document.getElementById("dropdown-content");
  var profileButton = document.querySelector(".profile-button");
  
  if (!dropdownContent.contains(event.target) && !profileButton.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});