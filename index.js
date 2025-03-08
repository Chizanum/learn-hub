// Toggle the mobile menu when the hamburger is clicked
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  if (hamburger && navBar) {
    hamburger.addEventListener("click", function () {
      navBar.classList.toggle("active");
    });
  }

  const loginBtnHome = document.getElementById("login");
  const signupBtnHome = document.getElementById("signup");
  const signupBtnHomeMobile = document.getElementById("signupMobile");
  const loginBtnHomeMobile = document.getElementById("loginMobile");

  // Ensure buttons exist before adding event listeners
  if (loginBtnHome) {
      loginBtnHome.addEventListener("click", () => {
          localStorage.setItem("authForm", "login");
      });
  }
  if (signupBtnHome) {
      signupBtnHome.addEventListener("click", () => {
          localStorage.setItem("authForm", "signup");
      });
  }
  if (loginBtnHomeMobile) {
      loginBtnHomeMobile.addEventListener("click", () => {
          localStorage.setItem("authForm", "login");
      });
  }
  if (signupBtnHomeMobile) {
      signupBtnHomeMobile.addEventListener("click", () => {
          localStorage.setItem("authForm", "signup");
      });
  }
});


