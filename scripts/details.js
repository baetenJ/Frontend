addEventListener("DOMContentLoaded", async function (){
    // grab search params from the url ater the question mark
    const urlparam = new URLSearchParams(window.location.search)
    const courseID = urlparam.get('id')
    console.log(courseID)

    const response = await fetch("http://localhost:3000/api/courses/" + courseID) 
    const course = await response.json()
    console.log(course)


    let heading = ""
    heading += `${course.course_name} page`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+= `
    <h2> Course Name - ${course.course_name} </h2>
    <p> Course Description - ${course.course_desc} </p>
    <p> Subject Area - ${course.subject_area} </p>
    <p> Number of Credits - ${course.cred_number} </p>

    `

    document.querySelector("div").innerHTML = html
})