class Auth {
    constructor() {
        body = document.querySelector("body");
        checkAuth();
    }

    checkAuth() {
        const auth = localStorage.getItem("auth");
        if (auth !== "1") {
            redirectToLogin();
        } else {
            showBody();
        }
    }

    showBody() {
        window.location.href = "/index.html";
    }

    redirectToLogin() {
        window.location.href = "/login.html";
    }

    logOut() {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("uname");
        redirectToLogin();
    }
}