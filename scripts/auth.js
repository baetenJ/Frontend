class Auth {
    constructor() {
        this.body = document.querySelector("body");
        this.checkAuth();
    }

    checkAuth() {
        const auth = localStorage.getItem("auth");
        if (auth !== "1") {
            this.redirectToLogin();
        } else {
            this.showBody();
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
        this.redirectToLogin();
    }
}