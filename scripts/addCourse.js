addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addCourse) // might need this infront of document
})

// add course to databse using async function

async function addCourse() {
    // should match courses.js in the backend
    const course = {
        course_name: document.querySelector("#name").value,
        course_desc: document.querySelector("#description").value,
        subject_area: document.querySelector("#subArea").value,  // .value ? document.querySelector("subArea").value.split(",") : []
        cred_number: document.querySelector("#numCreds").value 
    }

    const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST", 
        headers: { 
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added course with ID of " + results._id)

        // clear form after completed
        document.querySelector("form").reset()
    }

    else {
        document.querySelector("#error").innerHTML = "Cannot Add Course."
    }
}