addEventListener("DOMContentLoaded", async function() {
    const response = await fetch ("http://localhost:3000/api/courses")
    const courses = await response.json();
    document.querySelector("#registerBtn").addEventListener("click", registerClicked)

    let checkBoxHtml = ""
    let identifier = 0
    for (let course of courses){
        checkBoxHtml += `<li><input type="checkbox" value="${course.course_name}" id=courseCheck${identifier}><label for="courseCheck">&nbsp&nbsp${course.course_name}</label></li>`
        identifier += 1
    }

    document.querySelector("#studentForm").innerHTML = checkBoxHtml

/*
    if (courses > 0){
        document.querySelector("studentP").innerHTML = "These are the classes available for registration."
    }
    else{
        document.querySelector("studentP").innerHTML = "There are no classes available for registration."
    }
*/

async function registerClicked() {
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();
    let registeredHtml = ""
    let form = document.querySelector("#studentForm");
    let checkboxes = form.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            registeredHtml += `<li>${courses[index].course_name} - ${courses[index].subject_area} - ${courses[index].cred_number}</li>`;
            document.querySelector("#yourClasses").innerHTML = "These are the classes you are currently registered for."
        }
    });

    if (registeredHtml === "") {
        registeredHtml = "<p>No courses selected.</p>";
    }

    document.querySelector("#studentSignedUp").innerHTML = registeredHtml;
}

}
)


