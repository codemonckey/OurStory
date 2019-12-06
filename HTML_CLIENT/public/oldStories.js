
var buttonArray = ["placeholder","placeholder","placeholder","placeholder","placeholder","placeholder","placeholder","placeholder","placeholder","placeholder",];
var temp = new XMLHttpRequest();
temp.open('GET', "listOfStories.txt", true);
temp.send();

temp.onreadystatechange = function () {
        if (temp.readyState == 4 && temp.status == 200) {
                var response = temp.responseText;
                var lit = response.split('\n');
                console.log(lit.length);
                for (let i = 0; i < lit.length; i++) {
                        if(lit[i].length==0){
                            break;
                        }
                        var num = i+1;
                        var twoLit = lit[i].split('---');
                        document.getElementById(num.toString(10) + "Title").innerHTML = twoLit[0];
                        console.log("interesting");
                        console.log(twoLit[1]);
                        buttonArray[i]=twoLit[1];
                }
        }

}

document.getElementById("1Title").addEventListener("click", function () {
    location.href = buttonArray[0];
});
document.getElementById("2Title").addEventListener("click", function () {
    location.href = buttonArray[1];
});
document.getElementById("3Title").addEventListener("click", function () {
    location.href = buttonArray[2];
});
document.getElementById("4Title").addEventListener("click", function () {
    location.href = buttonArray[3];
});
document.getElementById("5Title").addEventListener("click", function () {
    location.href = buttonArray[4];
});
document.getElementById("6Title").addEventListener("click", function () {
    location.href = buttonArray[5];
});
document.getElementById("7Title").addEventListener("click", function () {
    location.href = buttonArray[6];
});
document.getElementById("8Title").addEventListener("click", function () {
    location.href = buttonArray[7];
});
document.getElementById("9Title").addEventListener("click", function () {
    location.href = buttonArray[8];
});
document.getElementById("10Title").addEventListener("click", function () {
    location.href = buttonArray[9];
});