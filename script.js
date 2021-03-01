let wrapper = document.querySelector(".wrapper");
let button = document.getElementById("button");
let clearButton = document.getElementById("clear");

button.addEventListener("click", function () {
  
  let newDiv = document.createElement("div");
  newDiv.id = "newDivId";
  wrapper.append(newDiv);
  
});