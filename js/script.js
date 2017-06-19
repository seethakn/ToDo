/* Javascript file for retrieving and displaying todo task items */

var tasksList = []; //An array to collect entered task items

function task(minion, taskDescription, taskDifficulty)
  {
    this.minion = minion;
    this.taskDescription = taskDescription;
    this.taskDifficulty = taskDifficulty;
  }

/*window.onload = function(){
  console.log("Function called");
  var submitButton = document.getElementById("assignTask");
  submitButton.onclick = getFormData();
}*/

function getFormData(){
  var taskDescription = document.getElementById("taskDescription").value;
  var taskDifficulty = document.getElementById("taskDifficulty").value;
  var minion = document.querySelector('input[name="minion"]:checked').value;
  //console.log(minion + " needs to do " + taskDescription + " which is " + taskDifficulty + " task");
  var newTask = new task(minion, taskDescription, taskDifficulty);
  tasksList.push(newTask);
  addToDoListToPage(); //To display todo items on the web page
}

function addToDoListToPage(){
  var ulTasksList = document.getElementById("todoTasksList");
  ulTasksList.innerHTML = "";
  for (var i=0; i<tasksList.length; i++){
    var taskItem = tasksList[i];
    var liTaskItem = document.createElement("li");
    liTaskItem.innerHTML = taskItem.minion + " needs to do " + taskItem.taskDescription + " which is " + taskItem.taskDifficulty + " task";
    ulTasksList.appendChild(liTaskItem);
}
}
