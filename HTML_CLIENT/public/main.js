const el = document.getElementById("buttonClick");

el.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/loading.html"
});


const te = document.getElementById("test");

te.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/contribute.html"
});

const osc = document.getElementById("oldStoriesClicked");
osc.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/oldStories.html"
});