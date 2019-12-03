
const sendSentence = document.getElementById("submitSentence");
sendSentence.addEventListener("click", function() {

    let xhr = new XMLHttpRequest();
    let url = "contribute.json";

    //Creating XHR object
    xhr.open("POST", url);
  
    //Set the request header i.e. which type of content are sending
    xhr.setRequestHeader("Content-Type", "text/plain");

    //Create a state change callback
    xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {

            //Print received data from server
            sentence.innerHTML = this.responseText;
            // fd.append("text",this.responseText);
        }
    };

    //Sending data with the request
    xhr.send(document.getElementById("newSentence").value +  "ENDOFFILE");

    location.href = "http://localhost:8080"

});