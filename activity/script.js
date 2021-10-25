let todoInput = document.querySelector(".todo-input"); 
let addTodoButton = document.querySelector(".add-todo"); 
let todosList = document.querySelector(".todos-list"); 

function addTodo(){
    // method to add todo's
    let todo = todoInput.value;
    
    if(todo){
        // get list of items
        let listItem = document.createElement("li"); 

        // add items to list
        listItem.classList.add("todo-item"); 
       
        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        
        deleteButton.addEventListener("click" , function(event){
            console.log("delete todo clicked !!!");
            console.log(event);
            event.target.parentNode.remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }else{
        alert("You Haven't Entered Any Todo !!!");
    }
}

addTodoButton.addEventListener("click" , function(){
    addTodo()
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});






