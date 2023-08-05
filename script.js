document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");

    overlay.style.display = "block";

    passwordForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const password = passwordInput.value;
        if (password === "23092021") {
            overlay.style.display = "none";
        } else {
            alert("Em quên ngày kỉ niệm của tụi mình à:3");
            passwordInput.value = "";
        }
    });
});

const heart = document.getElementById("heart");

heart.addEventListener("click", function() {
    heart.classList.toggle("heart-clicked");
});

