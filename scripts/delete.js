addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click", deleteCourse)
    getAllCourses()
})

async function getAllCourses(){
    const response = await fetch("http://localhost:3000/api/courses")
    if(response.ok){
        const courses = await response.json()
        let html = ""
        for (let course of courses){
            html += `<option value="${course._id}">${course.course_name} </option>`
        }
        document.querySelector("#courseDropdown").innerHTML = html
    }
}

async function deleteCourse(){
    const courseId = document.querySelector("#courseDropdown option:checked").value;

    const response = await fetch("http://localhost:3000/api/courses/" + courseId, {
        method: "DELETE"
    });

    if(response.ok){
        alert("Course was deleted.")
        getAllCourses();
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot Delete Course"
    }
}