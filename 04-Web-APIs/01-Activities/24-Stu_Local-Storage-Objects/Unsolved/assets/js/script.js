var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");


signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var firstName = localStorage.getItem("first-name")
  firstNameInput.textContent = firstName
  localStorage.setItem("firstName", firstName)


  var lastName = localStorage.getItem("lastName")
  lastNameInput.textContent = lastName
  localStorage.setItem("lastName", lastName)


  var email = localStorage.getItem("email")
  emailInput.textContent = email
  localStorage.setItem("email", email)


  var password = localStorage.getItem("password")
  passwordInput.textContent = password
  localStorage.setItem("password", password)




  // TODO: Set new submission to local storage 
  
});
