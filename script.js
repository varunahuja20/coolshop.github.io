// JavaScript source code 
var button = document.getElementById("Enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
item.forEach(check);
function addToList() {
    
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
       //var item1 = li;
        
        input.value = null;
        

        //The new list element should contain a button corresponding to it which should delete the list item on clicking.
        var newButton = document.createElement("button");
        newButton.appendChild(document.createTextNode("-"));
        li.appendChild(newButton);
        newButton.classList.add("delete");
         
        var deleteButton = document.querySelectorAll("button.delete");
        deleteButton.forEach(remove);
        
    }
    return li;
}
function check(listItem) {
    
    listItem.addEventListener("click", function () {
        console.log(listItem);      
        listItem.classList.toggle("done");
        
    })
}

button.addEventListener("click", function () {
    var newItem=addToList();
    
    console.log(newItem);
    newItem.check;

    
})
input.addEventListener("keypress", function () {

    if (event.which === 13) {
        var newItem = addToList();

        console.log(newItem);
        check(newItem);
   

    }
    
})





function itemDel(nodeToBeDel) {
    ul.removeChild(nodeToBeDel);
}
function remove(i) {
    i.addEventListener("click", function (event) {
        console.log(i);
        console.log(event.target.parentNode);
        itemDel(event.target.parentNode);
    })
}
var deleteButton = document.querySelectorAll("button.delete");
deleteButton.forEach(remove);	




var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var flag = 0;
setGradient();



function setGradient() {

    body.style.background = "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        + ")";
    flag = 0;
    
    
    // $("button").click(ranNum());
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);