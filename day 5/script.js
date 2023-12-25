const taskInput = document.getElementById("task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector("tasks-items");
const clearAll = document.querySelector(".clear-tasks");
const searchInput = document.querySelector("#search");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    //trim the values of the input
    const taskText = taskInput.ariaValueMax.trim();
    //check the value of the input is empty or not
    if(taskInput.value !== ""){
        //create li
        const newLi = document.createElement("li");
        newLi.className="task";
        newLi.style.margin = ".5rem 0rem";

        //create input field
        const task = document.createElement("input");
        task.disabled = true;
        task.type= "text";
        task.className = "taskDisabled";

        //make the value of the input to be our text
        task.value = taskText;
        //create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";


    }

})