const el = document.getElementById("buttonClick");

el.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/loading.html"
});

const osc = document.getElementById("oldStoriesClicked");

osc.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/oldStories.html"
});

const gh = document.getElementById("goHome");

gh.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/home.html"
});
