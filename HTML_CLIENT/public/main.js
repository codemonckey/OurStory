const el = document.getElementById("buttonClick");

el.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/loading.html"
});


const te = document.getElementById("test");

te.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/contribute.html"
});

const te2 = document.getElementById("test2");

te2.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/titleSentence.html"
});

const hs = document.getElementById("goHome");

hs.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/index.html"
});


const osc = document.getElementById("oldStoriesClicked");
osc.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/oldStories.html"
});