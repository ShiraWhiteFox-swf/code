document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    const registerContainer = document.querySelector(".register-container");
    const createAccountBtn = document.querySelector(".create-account");
    const backToLoginBtn = document.querySelector(".back-to-login");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    createAccountBtn.addEventListener("click", function () {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    backToLoginBtn.addEventListener("click", function () {
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.querySelector("#register-username").value;
        const password = document.querySelector("#register-password").value;

        if (localStorage.getItem(username)) {
            alert("Tài khoản đã tồn tại!");
        } else {
            localStorage.setItem(username, password);
            alert("Đăng ký thành công!");
            registerContainer.style.display = "none";
            loginContainer.style.display = "block";
        }
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;

        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            alert("Đăng nhập thành công!");
            window.location.href = "dashboard.html";
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    });
});
