const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskValue = input.value.trim();
    if (taskValue === "") return;

    const li = document.createElement('li');
    
    const textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);

    const divBtns = document.createElement('div');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Fait";
    completeBtn.className = "done-btn";
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Supprimer";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        list.removeChild(li);
    };

    divBtns.appendChild(completeBtn);
    divBtns.appendChild(deleteBtn);
    li.appendChild(divBtns);
    
    list.appendChild(li);
    input.value = "";
});
