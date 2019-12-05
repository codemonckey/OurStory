const hs = document.getElementById("goHome");

hs.addEventListener("click", function () {
    location.href = "http://localhost:8080/public/home.html";
});

setInterval(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "waiting.txt", true);
    xhr.send();

xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
    response = xhr.responseText;
    if(response == "true"){
    location.href = "http://localhost:8080/public/contribute.html";
    }
}
}
},3000);
window.onload = setInterval;
