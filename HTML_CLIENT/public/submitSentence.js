
const sendSentence = document.getElementById("submitSentence");
sendSentence.addEventListener("click", function() {

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/public/sample.txt";

    //Creating XHR object
    xhr.open("POST", url);

    //Set the request header i.e. which type of content are sending
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(document.getElementById("newSentence").value +  "ENDOFFILE");

    location.href = "http://localhost:8080"
});

