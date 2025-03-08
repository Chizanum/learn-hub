document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (!loginBtn || !signupBtn || !loginForm || !signupForm) return; // Prevents errors if elements are missing

    loginBtn.addEventListener("click", () => {
        localStorage.setItem("authForm", "login"); // Save selection
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });

    signupBtn.addEventListener("click", () => {
        localStorage.setItem("authForm", "signup"); // Save selection
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });

    //Fix: Load last selected form correctly
    setTimeout(() => {
        const savedForm = localStorage.getItem("authForm");
        if (savedForm === "signup") {
            signupBtn.click();
        } else {
            loginBtn.click();
        }
    }, 100); // Slight delay to ensure it loads correctly
});
