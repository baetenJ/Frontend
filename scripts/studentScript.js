addEventListener("DOMContentLoaded", async function() {
    const response = await fetch ("http://localhost:3000/api/courses")
    const courses = await response.json();

    let checkBoxHtml = ""

    for (let course of courses){
        checkBoxHtml += `<li><input type="checkbox" value="${course.course_name}" id="course"><label for="course">&nbsp&nbsp${course.course_name}</label></li>`
    }

    document.querySelector("#studentForm").innerHTML = checkBoxHtml

    if (courses > 0){
        document.querySelector("studentP").innerHTML = "These are the classes available for registration."
    }
    else{
        document.querySelector("studentP").innerHTML = "There are no classes available for registration."
    }
    
})