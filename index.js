const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector ('#task-title-input');
const todoList = document.querySelector('#todo-list');

const tasks = []





form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const taskTitle = taskTitleInput.value
    if (taskTitle.length <3){
        alert('Sua tarefa precisa ter, pelo menos, 3 caracteres.')
        return;
    }
    tasks.push (taskTitle)

    const li = document.createElement('li')
    li.textContent = taskTitle
    todoList.appendChild(li)  

    taskTitleInput.value = ''
})