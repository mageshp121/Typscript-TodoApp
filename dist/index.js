"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createNewTod);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// these function is used to storing this text data into local storage
// its not possible to store obejct inside so we will stringfying it
function saveToods() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleachange(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createNewTod(newTodo);
    todos.push(newTodo);
    saveToods();
    input.value = '';
}
;
function createNewTod(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        console.log("changed");
        todo.completed = checkbox.checked;
        saveToods();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list?.append(newLI);
}
form.addEventListener("submit", handleachange);
// console.log(input.value);
// btn.addEventListener("click", function(){
//     alert(input.value)
//     input.value=''
// })
// two methods
// const form = document.querySelector("form")!;
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("submited");
// })
