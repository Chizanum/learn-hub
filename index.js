// Toggle the mobile menu when the hamburger is clicked
/**
 * This function initializes event listeners for the Learn Hub website.
 * It toggles the mobile navigation menu when the hamburger button is clicked,
 * and sets the "authForm" value in localStorage when specific buttons are clicked.
 */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    
    function toggleMenu() {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
    }

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    
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

    // Add mobile dropdown functionality
    const mobileNavHeaders = document.querySelectorAll('.mobile-nav-header');
    
    mobileNavHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const dropdown = header.nextElementSibling;
            header.classList.toggle('active');
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            mobileNavHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // Add mobile sub-dropdown functionality
    const mobileSubHeaders = document.querySelectorAll('.mobile-sub-header');

    mobileSubHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const subDropdown = header.nextElementSibling;
            header.classList.toggle('active');
            subDropdown.classList.toggle('active');
            
            // Close other sub-dropdowns in the same level
            const siblings = header.parentElement.parentElement.querySelectorAll('.mobile-sub-header');
            siblings.forEach(sibling => {
                if (sibling !== header) {
                    sibling.classList.remove('active');
                    sibling.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});



