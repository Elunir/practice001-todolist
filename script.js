textInput = document.querySelector("#Name");
nameValue = document.querySelector("#todo");
removeButton = document.getElementsByClassName("closebutton");

const empty = '';

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


data.forEach((item) => {
  addTodoText(item);
})

function addTodo(){
    if(textInput.value!=empty){
  itemsArray.push(textInput.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  addTodoText(textInput.value);
  textInput.value="";
}
}

function todoCard(){
    
    card = document.createElement("div");
    cardStyle = card.classList.add("card");
    closeButton = document.createElement("div");
    closeButton.innerHTML = 'X';
    closeButtonStyle = closeButton.classList.add("closebutton");
    closeButton.addEventListener("click",removeTodo);
    card.addEventListener("click",checked);
    card.appendChild(closeButton);
    
}

function addTodoText(text){
    todoCard();
    node = document.createElement("p");
    textNode = document.createTextNode(text)
    node.appendChild(textNode);
    card.appendChild(node);
    nameValue.appendChild(card)
}

function removeTodo(){
            this.parentElement.classList.remove("card");
            this.parentElement.classList.add("removeTodo");
            itemsArray.pop();
            localStorage.setItem('items', JSON.stringify(itemsArray));

}

function checked(){
           this.classList.toggle("checked");
}