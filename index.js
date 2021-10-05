let outputName = document.getElementById("name");
let outputUrl = document.getElementById("archive");
let outputDirector = document.getElementById("director");

function addMovie() {
    let inputName = document.getElementById("movie-name").value;
    let inputLink = document.getElementById("movie-url").value;
    let inputDirector = document.getElementById("director-movie").value;


    outputName.innerHTML += `<br> <br> <hr>` + inputName;

    outputDirector.innerHTML += `<br> <br> <hr>` + inputDirector;
    outputUrl.innerHTML += `<br> <br> <hr> ` + inputLink;



}