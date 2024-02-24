addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#updateBtn").addEventListener("click",updateCourse)

    const urlparam = new URLSearchParams(window.location.search)
    const courseID = urlparam.get('id')

    const response = await fetch("http://localhost:3000/api/courses/" + courseID)
    if(response.ok){
        let course = await response.json()
        document.querySelector("#courseId").value = course._id
        document.querySelector("#name").value = course.course_name
        document.querySelector("#description").value = course.course_desc
        document.querySelector("#subArea").value = course.subject_area
        document.querySelector("#numCreds").value = course.cred_number
    }
})

async function updateCourse(){
    // create song from form fields
    const courseID = document.querySelector("#courseId").value


    // same info as addCourse.js
    const course = {
        _id: document.querySelector("#courseId").value,
        course_name: document.querySelector("#name").value,
        course_desc: document.querySelector("#description").value,
        subject_area: document.querySelector("#subArea").value,  // .value ? document.querySelector("subArea").value.split(",") : []
        cred_number: document.querySelector("#numCreds").value 
    }
    const response = await fetch("http://localhost:3000/api/courses/" + courseID,{
        method: "PUT",
        headers: {
           "Content-Type" : "applications/json"
        },
        body: JSON.stringify(course)
    })

    if(response.ok){
        alert("Updated Course")
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot Update Course"
    }
}