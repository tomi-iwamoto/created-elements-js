let wrapper = document.querySelector(".wrapper");
let button = document.getElementById("button");
let clearButton = document.getElementById("clear");

/*This event listener will create a new div when the button with id of "button" is clicked. 
It will also add an id to this new div*/
button.addEventListener("click", function () {
  
  let newDiv = document.createElement("div");
  newDiv.id = "newDivId";
  newDiv.classList = "active";
  wrapper.append(newDiv);
  
});


/*This event listener will create a node list of all the div elements with the class of "active" 
and then produce an array of it using the Array.from() method. Then we use a forEach method to 
cycle through the array-- that all the targeted elements will display as "none."*/
clearButton.addEventListener("click", function () {
  
    let activeDivs = document.querySelectorAll('.active');
    let divArray = Array.from(activeDivs);
    
    //Method that cycles through the array and applies the clearfunction function. 
    divArray.forEach(clearfunction);
    
    function clearfunction(element) {

      element.style.display = "none";
      
    } 
    
    
  })
  