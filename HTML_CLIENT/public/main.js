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

// Returns a Promise that resolves after "ms" Milliseconds
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }
   
   async function enterQueue () { // We need to wrap the loop into an async function for this to work
     while(waiting) {
         getQueue();
       await timer(3000); // then the created Promise can be awaited
     }
     
   }
   
   load();

   function getQueue(){
    
   }