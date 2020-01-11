var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li")

// add event listener to the existing buttons 
for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeParent, false);
}

// remove items when clicked
function removeParent(delEvent){
	delEvent.target.removeEventListener("click", removeParent, false);
	delEvent.target.parentNode.remove();
}

// strikeout an item when it is clicked
function strikeThroughItem(item){
	item = item || window.event;
	return item.target || item.srcElement;
}

// toggle the items
ul.onclick = function(event){
	var target = strikeThroughItem(event);
	target.classList.toggle("done");
}

function inputLength(){
	return input.value.length;
}

// add the item with the name entered along with a delete button
function createListElement(){
		var li = document.createElement("li");
		var delButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Delete"));
		delButton.classList.add("delete")
		delButton.onclick = removeParent;
		li.appendChild(document.createTextNode(input.value + " "));
		li.appendChild(delButton);
		ul.appendChild(li);
		input.value = "";
}

// call the createListElement function when the item is clicked
function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

// call the createListElement function when enter button is pressed
function addListAfterKeyPress(event){
	if(inputLength() > 0 && event.keyCode == 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);