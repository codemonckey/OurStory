const hs = document.getElementById("goHome");

hs.addEventListener("click", function () {
    location.href = "http://localhost:8080/public/home.html";
});

setInterval(function () {
    var xhr = new XMLHttpRequest();
    var response
    xhr.open('GET', "waiting.txt", true);
    xhr.send();
    
    if (xhr.readyState == 2) {
        response = xhr.response;
        alert(response)
    }

    if(response == "true"){
    location.href = "http://localhost:8080/public/contribute.html";
    }
},3000);
window.onload = setInterval;
