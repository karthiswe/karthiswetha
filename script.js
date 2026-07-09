var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")


function  showpopup(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
    
}
function cancel1(){
    popupbox.style.display="none"
    popupoverlay.style.display="none"
 }

function delete1(event){
    event.target.parentElement.remove();

}

var cancel=document.querySelector("#cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
})
var add=document.querySelector("#addbook")
add.addEventListener("click",function(event){
    event.preventDefault()
})



var bookcontainer=document.querySelector(".layer")
var booknameinput=document.getElementById("bookname")
var bookauthorinput=document.getElementById("bookauthor")
var descriptioninput=document.getElementById("description")
var addbook=document.getElementById("addbook")

addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booknameinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${descriptioninput.value}</p>
            <button onclick="delete1(event)">Delete </button>`
    bookcontainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    document.querySelector("form").reset(); 
    
})
