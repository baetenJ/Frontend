let token = 

window.onload=function(){
document.querySelector("#loginBtn").addEventListener("click", function(){
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    login(username, password)
})}

async function login(username, password){
    const login_cred = {
        username,
        password
    }
    // sends login to backend
    const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login_cred)
    })
    if(response.ok){
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth
        console.log(token)

        localStorage.setItem("token", token)
        localStorage.setItem("token", uname)
        localStorage.setItem("token", auth)

        window.location.replace("/index.html")
    }
    else {
        document.querySelector("#errorMsg").innerHTML = "Bad Username or Password"
    }
}