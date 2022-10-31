const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click" , deleteCheck)
filterOption.addEventListener("click" , filterTodo)

function addTodo(event) {
    event.preventDefault()

    Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@ayush3695 
ayush3695
/
ToDo-List
Public
forked from aayushray/ToDo-List
Code
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
ToDo-List
/
logic.js
in
main
 

Spaces

4

No wrap
1
const todoInput = document.querySelector(".todo-input")
2
const todoButton = document.querySelector(".todo-button")
3
const todoList = document.querySelector(".todo-list")
4
const filterOption = document.querySelector(".filter-todo")
5
​
6
todoButton.addEventListener("click", addTodo)
7
todoList.addEventListener("click" , deleteCheck)
8
filterOption.addEventListener("click" , filterTodo)
9
​
10
function addTodo(event) {
11
    event.preventDefault()
12
​
13
    /*
14
    <div class="todo">
15
        <li class="todo-item">hey</li>
16
        <button class="complete-btn">
17
            <i class="fas fa-check"></i>
18
        </button>
19
        <button class="trash-btn">
20
            <i class="fas fa-trash"></i>
21
        </button>
22
    </div>
23
    */
24
​
25
    const todoDiv = document.createElement("div")
26
    todoDiv.classList.add("todo")
27
​
28
    const newTodo = document.createElement("li")
29
    newTodo.innerText = todoInput.value
30
    newTodo.classList.add('todo-item')
31
    todoDiv.appendChild(newTodo)
32
​
33
    const completeButton = document.createElement("button")
34
    completeButton.innerHTML = '<i class ="fas fa-check"></i>'
35
    completeButton.classList.add("completed-btn")
36
    todoDiv.appendChild(completeButton)
37
​
38
    const trashButton = document.createElement("button")
39
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>'
40
    trashButton.classList.add("trash-btn")
41
    todoDiv.appendChild(trashButton)
42
​
43
    todoList.appendChild(todoDiv)
44
    todoInput.value = ""
45
}
@ayush3695
Commit changes
Commit summary
Create logic.js
Optional extended description
Add an optional extended description…
 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

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
