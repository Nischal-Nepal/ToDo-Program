let inpStr = document.querySelector("#inp");
let NewDiv = document.querySelector(".text");

function Add() {
 if(inpStr.value == ""){
    alert("Please Enter task")
 }else{
    let NewElem = document.createElement("ul");  //ul => element create
    NewElem.innerHTML = `${inpStr.value} <i class="fa-solid fa-trash"></i>`;
    NewDiv.appendChild(NewElem);
    inpStr.value="";
    NewElem.querySelector("i").addEventListener("click" , remove);
    function remove(){
      NewElem.remove();
    }
 }
}