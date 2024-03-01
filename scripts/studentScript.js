addEventListener("DOMContentLoaded", async function() {
    const response = await fetch ("http://localhost:3000/api/courses")
    const courses = await response.json();
    document.querySelector("#registerBtn").addEventListener("click", registerClicked)

    let checkBoxHtml = ""
    let registeredHtml = ""

    for (let course of courses){
        checkBoxHtml += `<li><input type="checkbox" value="${course.course_name}" id="courseCheck"><label for="courseCheck">&nbsp&nbsp${course.course_name}</label></li>`
    }

    document.querySelector("#studentForm").innerHTML = checkBoxHtml

    if (courses > 0){
        document.querySelector("studentP").innerHTML = "These are the classes available for registration."
    }
    else{
        document.querySelector("studentP").innerHTML = "There are no classes available for registration."
    }

    async function registerClicked(){

        if (document.querySelector("#courseCheck").checked){
        registeredHtml += `<li>${course.course_name} - ${course.subject_area} - ${course.cred_number}</li>`
        }

        document.querySelector("#studentSignedUp").innerHTML = registeredHtml
    }
    
})