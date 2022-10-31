const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click" , deleteCheck)
filterOption.addEventListener("click" , filterTodo)

function addTodo(event) {
    event.preventDefault()

    /*
    <div class="todo">
        <li class="todo-item">hey</li>
        <button class="complete-btn">
            <i class="fas fa-check"></i>
        </button>
        <button class="trash-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>
    */

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const completeButton = document.createElement("button")
    completeButton.innerHTML = '<i class ="fas fa-check"></i>'
    completeButton.classList.add("completed-btn")
    todoDiv.appendChild(completeButton)

    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target
    console.log(item)
    if(item.classList[0] === "trash-btn"){
        const todo=item.parentElement
        todo.classList.add("fall")
        todo.addEventListener("transitionend" , function(){
            todo.remove()
        })
    }
    if(item.classList[0] === "completed-btn"){
        const todo=item.parentElement
        todo.classList.toggle("completed")
    }
}


function filterTodo(e){
    const todos=todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case "A ll":
                todo.style.display = "flex"
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }
                else{
                    todo.style.display = "none"
                }
                break;
            case "Uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }
                else{
                    todo.style.display = "none"
                }
                break;
            
        }
    })
}