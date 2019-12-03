
const sendSentence = document.getElementById("submitSentence");

sendSentence.addEventListener("click", function() {
    
    let sentence = document.querySelector('#newSentence');

    let xhr = new XMLHttpRequest();
    let fd = new FormData();

    let url = "sentence.txt";

    //Creating XHR object
    xhr.open("POST", url);

    
  
    //Set the request header i.e. which type of content are sending
    xhr.setRequestHeader("Content-Type", "text/plain");

    

    //Create a state change callback
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {

            //Print received data from server
            sentence.innerHTML = this.responseText;
        }
    };

    //Sending data with the request
    xhr.send(sentence);

    location.href = "http://localhost:8080"

});