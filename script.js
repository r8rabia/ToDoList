let tasks = [];
function displayTasks(){
let html=" ";
for(let i=0 ; i< tasks.length ; i ++){
html += "<li>" + tasks[i] + " <button onclick='removeTask(" + i +")'>x</button> </li> ";
}

document.getElementById("list").innerHTML=html; 
updateTasks();
}

function addTask(){
    let html = "";
let taskInput = document.getElementById("task");
let text = taskInput.value;

if(text == ""){
    return;
}
tasks.push(text);
taskInput.value="";
saveTasks();
displayTasks();
}

function removeTask(i){
tasks.splice(i,1);
saveTasks();
displayTasks();
}

function clearAll(){
    tasks=[];
    saveTasks();
    displayTasks();
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function updateTasks(){
   let dropdown = document.getElementById("searchDropdown");

   dropdown.innerHTML="<option value=''>Search for a Task</option>";

   for(let i=0 ; i< tasks.length; i++ ){
    dropdown.innerHTML +="<option value='"+tasks[i]+"' >"+tasks[i]+"</option>"
   }
}

displayTasks();
saveTasks();