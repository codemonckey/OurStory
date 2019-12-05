const hs = document.getElementById("goHome");

hs.addEventListener("click", function () {
    location.href = "http://localhost:8080/public/home.html";
});

setInterval(function () {
    location.href = "http://localhost:8080/public/contribute.html";
}, 5000);

window.onload = setInterval;

