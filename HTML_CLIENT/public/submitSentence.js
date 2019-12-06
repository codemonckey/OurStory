
const sendSentence = document.getElementById("submitSentence");
sendSentence.addEventListener("click", function() {

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/public/sample.txt";

    //Creating XHR object
    xhr.open("POST", url);

    //Set the request header i.e. which type of content are sending
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(document.getElementById("newSentence").value +  "ENDOFFILE");

    location.href = "http://localhost:8080/public/loading.html"
});


    var temp = new XMLHttpRequest();
    temp.open('GET', "contr.txt", true);
    temp.send();

temp.onreadystatechange=function(){
    if(temp.readyState==4 && temp.status==200){
    response = temp.responseText;
    lit = response.split('\n');
        document.getElementById("newSentenceText").innerHTML = lit[0];
        document.getElementById("prevSentence").innerHTML = "<b>"+lit[1]+"</b>";
    }

}