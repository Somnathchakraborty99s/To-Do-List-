let task = [];
const addtask = () => {
    const taskinput = document.getElementById('taskinput');
    const text = taskinput.value.trim();
    if (text) {
        task.push({ text: text, completed: false })
        taskinput.value = "";
        updateTasksList();
    }

}
const updateTasksList = () => {
    const tasklist = document.getElementById('task-list');
    tasklist.innerHTML = "";
    task.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? "completed" : ""}">
              <input type="checkbox" class="checkbox" ${task.completed ? "checked" :""}/>
               <p>${task.text}</p>
            </div>
            <div class="icons">
               <img src="edit.png" onClick="editTask(${index})">
               <img src="trash.png"onClick="deleteTask(${index})">
            </div>
         </div>
        `;
    listItem.addEventListener('change', () => toggleTaskcomplete(index));
    tasklist.append(listItem);

});
};
document.getElementById('newtask').addEventListener('click', function (e) {
    e.preventDefault();
    addtask();


});