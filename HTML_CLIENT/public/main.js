var stories = getStories();
let storyList = document.getElementById("storyList");

stories.forEach(story => {
    let listItem = document.createElement("li");
    let listValue = document.createTextNode(story);

    listItem.appendChild(listValue);
    storyList.appendChild(listItem);
});

function getStories() {
    return ["BROWN", "COW", "MOO"];
}

const el = document.getElementById("buttonClick");

el.addEventListener("click", function() {
    location.href = "http://localhost:8080/public/test.html"
});

