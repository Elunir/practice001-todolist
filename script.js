textInput = document.querySelector("#Name");
nameValue = document.querySelector("#todo");
removeButton = document.getElementsByClassName("closebutton");

const empty = '';

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

let oldLocalStorage = JSON.parse(localStorage['items']);

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
            console.log(oldLocalStorage);
            oldLocalStorage.slice(this,1);
            console.log(data);
            // oldLocalStorage = data;
            this.parentElement.classList.remove("card");
            this.parentElement.classList.add("removeTodo");

}

function checked(){
           console.log(this);
           this.classList.toggle("checked");
}


