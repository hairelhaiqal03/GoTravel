// Login validation
function validateLogin() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("⚠️ Please fill in both username and password!");
    return false; // prevent form submission
  } else {
    alert("✅ Welcome, " + user + "! Redirecting to Home...");
    window.location.href = "home.html"; // go to home page
    return false;
  }
}

// Booking validation
function validateBooking() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dest = document.getElementById("destination").value;

  if (name === "" || email === "" || dest === "") {
    alert("⚠️ Please complete all booking fields!");
    return false; // prevent form submission
  } else {
    alert("🎉 Thank you, " + name + "! Your trip to " + dest + " is confirmed!");
    return false;
  }
}
